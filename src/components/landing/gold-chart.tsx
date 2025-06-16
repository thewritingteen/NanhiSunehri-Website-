"use client";

import { useEffect, useRef } from 'react';
import type { EChartsOption, ECharts } from 'echarts';
import { init } from 'echarts';
import { motion } from 'framer-motion';

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
            backgroundColor: '#FFF8F0',
            borderColor: '#DFC58A',
            borderWidth: 1,
            textStyle: {
              color: '#3E2723',
              fontFamily: 'Tan Meringue, serif',
            },
            padding: 10,
          },
          grid: {
            left: '5%',
            right: '5%',
            bottom: '5%',
            top: '10%',
            containLabel: true,
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            axisLine: { lineStyle: { color: '#DFC58A', width: 1.2 } },
            axisLabel: {
              color: '#BA8759',
              fontFamily: 'Tan Meringue, serif',
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
              fontFamily: 'Tan Meringue, serif',
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
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="rounded-2xl shadow-lg p-4 bg-[#FAF3E9]"
      style={{ width: '100%', height: '400px' }}
    >
      <div className="text-xl font-semibold mb-4 text-[#3E2723] font-[Tan Meringue]">
        📈 Gold Price Trend - 2025
      </div>
      <div ref={chartRef} style={{ width: '100%', height: '100%' }} />
    </motion.div>
  );
}
