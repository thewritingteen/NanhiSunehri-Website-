"use client";

import { useEffect, useRef } from 'react';
import type { EChartsOption, ECharts } from 'echarts';
import { init, getInstanceByDom } from 'echarts';

export default function GoldChart() {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let chart: ECharts | undefined;

    const initializeChart = () => {
      if (chartRef.current) {
        chart = init(chartRef.current, 'light', { renderer: 'svg' }); // Using 'light' theme, can be customized
        const option: EChartsOption = {
          tooltip: {
            trigger: 'axis',
            backgroundColor: 'hsl(var(--card))', 
            borderColor: 'hsl(var(--border))',
            textStyle: { color: 'hsl(var(--card-foreground))' },
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            axisLine: { lineStyle: { color: 'hsl(var(--muted-foreground))' } },
            axisLabel: { color: 'hsl(var(--muted-foreground))' },
          },
          yAxis: {
            type: 'value',
            axisLine: { show: false },
            axisTick: { show: false },
            splitLine: { lineStyle: { color: 'hsl(var(--border))', type: 'dashed' } },
            axisLabel: { 
              formatter: '₹{value}',
              color: 'hsl(var(--muted-foreground))'
            },
          },
          series: [
            {
              name: 'Gold Price (per gram)',
              type: 'line',
              smooth: true,
              symbol: 'none',
              lineStyle: {
                width: 3,
                color: 'hsl(var(--primary))',
              },
              areaStyle: {
                color: {
                  type: 'linear',
                  x: 0, y: 0, x2: 0, y2: 1,
                  colorStops: [
                    { offset: 0, color: 'hsla(var(--primary), 0.3)' },
                    { offset: 1, color: 'hsla(var(--primary), 0.05)' }
                  ],
                },
              },
              data: [5800, 5850, 5900, 6100, 6050, 6200, 6300, 6250, 6400, 6500, 6450, 6600],
            },
          ],
          animation: true,
        };
        chart.setOption(option);
      }
    };
    
    // Dynamically import echarts
    import('echarts').then(echartsCore => {
      // Manually register necessary components if using modular import
      // For simplicity here, assuming full echarts is loaded or core + components are handled by the import
      initializeChart();
    }).catch(error => console.error("Failed to load ECharts", error));


    const resizeChart = () => {
      chart?.resize();
    };

    window.addEventListener('resize', resizeChart);

    return () => {
      chart?.dispose();
      window.removeEventListener('resize', resizeChart);
    };
  }, []);

  return <div ref={chartRef} style={{ width: '100%', height: '100%' }} />;
}
