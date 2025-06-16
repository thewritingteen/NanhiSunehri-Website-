"use client";

import { useEffect, useRef } from 'react';
import type { EChartsOption, ECharts } from 'echarts';
import { init } from 'echarts';

export default function GoldChart() {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let chart: ECharts | undefined;

    const initializeChart = () => {
      if (chartRef.current) {
        chart = init(chartRef.current, 'light', { renderer: 'svg' });

        const option: EChartsOption = {
          tooltip: {
            trigger: 'axis',
            backgroundColor: '#FAF3E9',
            borderColor: '#DFC58A',
            borderWidth: 1,
            textStyle: {
              color: '#3E2723',
              fontFamily: 'Arial, Helvetica, sans-serif',
            },
            padding: 10,
          },
          grid: {
            left: '10%',  // increased left padding so labels don't clip
            right: '10%',
            bottom: '15%', // more bottom padding to prevent clipping x-axis labels
            top: '15%',
            containLabel: true,
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            axisLine: { lineStyle: { color: '#DFC58A', width: 1.2 } },
            axisLabel: {
              color: '#BA8759',
              fontFamily: 'Arial, Helvetica, sans-serif',
              margin: 10,
            },
          },
          yAxis: {
            type: 'value',
            axisLine: { show: false },
            axisTick: { show: false },
            splitLine: { lineStyle: { color: '#F3E9D2', type: 'dashed' } },
            axisLabel: {
              formatter: '₹{value}',
              color: '#BA8759',
              fontFamily: 'Arial, Helvetica, sans-serif',
              margin: 10,
            },
          },
          series: [
            {
              name: 'Gold Price (per gram)',
              type: 'line',
              smooth: true,
              symbol: 'circle',
              symbolSize: 6,
              lineStyle: {
                width: 3,
                color: '#DFC58A',
              },
              itemStyle: {
                color: '#BA8759',
                borderColor: '#FAF3E9',
                borderWidth: 2,
              },
              areaStyle: {
                color: {
                  type: 'linear',
                  x: 0, y: 0, x2: 0, y2: 1,
                  colorStops: [
                    { offset: 0, color: '#DFC58A66' },
                    { offset: 1, color: '#FAF3E911' }
                  ],
                },
              },
              data: [5800, 5850, 5900, 6100, 6050, 6200, 6300, 6250, 6400, 6500, 6450, 6600],
            },
          ],
          animationDuration: 1200,
          animationEasing: 'cubicOut',
        };

        chart.setOption(option);
      }
    };

    import('echarts').then(() => {
      initializeChart();
    }).catch((err) => {
      console.error("Failed to load ECharts", err);
    });

    const resizeChart = () => {
      chart?.resize();
    };

    window.addEventListener('resize', resizeChart);

    return () => {
      chart?.dispose();
      window.removeEventListener('resize', resizeChart);
    };
  }, []);

  return (
    <div
      className="rounded-2xl shadow-lg p-6 bg-[#FAF3E9]"
      style={{
        width: '100%',
        maxWidth: '700px', // limit max width so it doesn’t stretch too far on big screens
        height: '420px',
        margin: '0 auto',  // center horizontally
        boxSizing: 'border-box',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        className="text-xl font-semibold mb-4 text-[#3E2723]"
        style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
      >
        📈 Gold Price Trend - 2025
      </div>
      <div
        ref={chartRef}
        style={{
          flexGrow: 1,
          width: '100%',
          height: '100%',
          minHeight: 0, // allow flex container to constrain height
        }}
      />
    </div>
  );
}
