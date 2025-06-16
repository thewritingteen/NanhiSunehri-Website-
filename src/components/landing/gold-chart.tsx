"use client";

import { useEffect, useRef } from 'react';
import type { EChartsOption, ECharts } from 'echarts';
import { init } from 'echarts';

export default function GoldChart() {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<ECharts | null>(null); // Use a ref to store the chart instance

  useEffect(() => {
    const initializeChart = () => {
      if (chartRef.current) {
        // Dispose of existing chart instance if it exists (for hot reloading/re-renders)
        if (chartInstance.current) {
          chartInstance.current.dispose();
        }

        // Initialize ECharts
        chartInstance.current = init(chartRef.current, 'light', { renderer: 'svg' });

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
          // Optimized grid for better fitting
          grid: {
            left: '3%', // Reduced left margin
            right: '4%', // Reduced right margin slightly
            bottom: '3%', // Reduced bottom margin
            top: '15%', // Keep top for title/legend if present, otherwise can reduce
            containLabel: true, // Crucial: ensures axis labels are within the grid area
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
          // Add this property to make ECharts automatically resize
          // This ensures the chart adapts to the exact size of its container
          // on initialization and subsequent resizes
          // The `autoresize` property is not a direct ECharts option for `setOption`
          // but rather an internal behavior when `chart.resize()` is called,
          // or if the container itself changes size.
          // The key is to ensure the container itself has fixed or constrained dimensions.
        };

        chartInstance.current.setOption(option);
        // Manually resize chart immediately after setting options if needed,
        // to ensure it takes the current container size.
        chartInstance.current.resize();
      }
    };

    // Use a more robust check for window
    if (typeof window !== 'undefined') {
      import('echarts').then(() => {
        initializeChart();
      }).catch((err) => {
        console.error("Failed to load ECharts", err);
      });

      const resizeChart = () => {
        chartInstance.current?.resize();
      };

      window.addEventListener('resize', resizeChart);

      return () => {
        chartInstance.current?.dispose();
        window.removeEventListener('resize', resizeChart);
      };
    }
  }, []);

  return (
    <div
      className="rounded-2xl shadow-lg p-6 bg-[#FAF3E9]"
      style={{
        width: '100%',
        maxWidth: '700px',
        // Important: Adjust height considering padding and title height
        // Outer height (420px) - padding (2 * 24px) - title height (~28px + 16px mb)
        // Let's make the height of the outer div fit its content
        // and let the flex grow handle the chart div.
        // OR, if you want a fixed overall height for the white box:
        height: '420px', // Keep fixed height for the outer box
        margin: '0 auto',
        boxSizing: 'border-box',
        overflow: 'hidden', // This will clip any overflow from the white box
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
          flexGrow: 1, // Takes up remaining space
          width: '100%',
          // Important: Explicitly set height to 100% so ECharts knows its boundary.
          // This 100% is relative to the *remaining* height available in the flex container.
          height: '100%',
          minHeight: 0, // Prevents flex item from exceeding container if content is too large
          // Add overflow hidden here as well, just in case ECharts renders something outside.
          overflow: 'hidden',
        }}
      />
    </div>
  );
}
