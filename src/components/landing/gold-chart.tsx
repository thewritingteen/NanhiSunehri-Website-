"use client";

import { useEffect, useRef } from 'react';
import type { EChartsOption, ECharts } from 'echarts';
import { init } from 'echarts';

export default function GoldChart() {
  // Ref to attach the ECharts instance to
  const chartRef = useRef<HTMLDivElement>(null);
  // Ref to store the ECharts instance itself
  const chartInstance = useRef<ECharts | null>(null);

  useEffect(() => {
    const initializeChart = () => {
      // Ensure the chart container div is available
      if (chartRef.current) {
        // Dispose of any existing chart instance to prevent memory leaks and re-initialization issues
        if (chartInstance.current) {
          chartInstance.current.dispose();
        }

        // Initialize ECharts on the current div reference.
        // Using 'light' theme and 'svg' renderer for potentially better performance/resolution.
        chartInstance.current = init(chartRef.current, 'light', { renderer: 'svg' });

        // Define the ECharts options for the line chart
        const option: EChartsOption = {
          // Tooltip configuration for displaying data on hover
          tooltip: {
            trigger: 'axis', // Show tooltip when hovering over the axis
            backgroundColor: 'rgba(250, 243, 233, 0.9)', // Slightly transparent background for the tooltip
            borderColor: '#DFC58A', // Border color matching the gold theme
            borderWidth: 1,
            textStyle: {
              color: '#3E2723', // Dark text for readability
              fontFamily: 'Inter, sans-serif', // Using Inter font as per guidelines
            },
            padding: 10, // Padding inside the tooltip box
          },
          // Grid configuration to control the chart's position within its container
          grid: {
            left: '3%',    // Reduced left margin
            right: '4%',   // Reduced right margin
            bottom: '3%',  // Reduced bottom margin
            top: '5%',     // Reduced top margin significantly as there's no title/legend above
            containLabel: true, // Ensures axis labels are fully contained within the grid area
          },
          // X-axis configuration (category type for months)
          xAxis: {
            type: 'category',
            boundaryGap: false, // Ensures the line starts/ends at the very edge of the axis
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], // Monthly data points
            axisLine: { lineStyle: { color: '#DFC58A', width: 1.2 } }, // Styling for the X-axis line
            axisLabel: {
              color: '#BA8759', // Color of X-axis labels
              fontFamily: 'Inter, sans-serif', // Using Inter font
              margin: 10, // Margin between labels and axis line
            },
          },
          // Y-axis configuration (value type for prices)
          yAxis: {
            type: 'value',
            axisLine: { show: false }, // Hide the Y-axis line
            axisTick: { show: false }, // Hide Y-axis ticks
            splitLine: { lineStyle: { color: '#F3E9D2', type: 'dashed' } }, // Dashed split lines for the grid
            axisLabel: {
              formatter: '₹{value}', // Formats Y-axis labels with Rupee symbol
              color: '#BA8759', // Color of Y-axis labels
              fontFamily: 'Inter, sans-serif', // Using Inter font
              margin: 10, // Margin between labels and axis line
            },
          },
          // Series configuration for the gold price line
          series: [
            {
              name: 'Gold Price (per gram)', // Name of the series
              type: 'line', // Line chart type
              smooth: true, // Smooth line interpolation
              symbol: 'circle', // Circle markers at data points
              symbolSize: 6, // Size of the markers
              lineStyle: {
                width: 3,
                color: '#DFC58A', // Color of the line
              },
              itemStyle: {
                color: '#BA8759', // Color of the markers
                borderColor: '#FAF3E9', // Border color for markers
                borderWidth: 2,
              },
              areaStyle: {
                // Gradient fill under the line
                color: {
                  type: 'linear',
                  x: 0, y: 0, x2: 0, y2: 1, // Vertical gradient
                  colorStops: [
                    { offset: 0, color: '#DFC58A66' }, // Top color (with transparency)
                    { offset: 1, color: '#FAF3E911' }  // Bottom color (more transparent)
                  ],
                },
              },
              // Sample data for gold prices
              data: [5800, 5850, 5900, 6100, 6050, 6200, 6300, 6250, 6400, 6500, 6450, 6600],
            },
          ],
          animationDuration: 1200, // Animation duration for chart appearance
          animationEasing: 'cubicOut', // Easing function for animation
        };

        // Set the defined options to the chart instance
        chartInstance.current.setOption(option);
        // Manually resize the chart to fit its current container size immediately after setting options
        chartInstance.current.resize();
      }
    };

    // Ensure window object is defined before interacting with it (for Next.js 'use client')
    if (typeof window !== 'undefined') {
      // Dynamically import ECharts to reduce initial bundle size
      import('echarts').then(() => {
        initializeChart(); // Initialize the chart once ECharts is loaded
      }).catch((err) => {
        console.error("Failed to load ECharts", err); // Log error if ECharts fails to load
      });

      // Function to resize the chart when the window is resized
      const resizeChart = () => {
        chartInstance.current?.resize();
      };

      // Add event listener for window resize
      window.addEventListener('resize', resizeChart);

      // Cleanup function:
      // This runs when the component unmounts or before the effect re-runs.
      return () => {
        chartInstance.current?.dispose(); // Dispose of the chart instance to clean up resources
        window.removeEventListener('resize', resizeChart); // Remove the resize event listener
      };
    }
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    // The main container for the chart.
    // It now directly styles the chart area without a surrounding 'white box'.
    <div
      ref={chartRef} // Attach the ref to this div for ECharts to render into
      className="w-full flex-grow" // Take full width and allow it to grow in a flex container
      style={{
        minHeight: '300px', // Ensures the chart has a minimum height to be visible
        // You can adjust this height as needed.
        // For a fixed height, you could use 'height: 400px' instead of minHeight.
      }}
    />
  );
}
