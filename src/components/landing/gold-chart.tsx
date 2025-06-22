// You might put this in a file like: src/components/gold-chart.tsx
"use client";

import { useEffect, useRef, useState } from 'react';
import type { EChartsOption, ECharts } from 'echarts';
import { init } from 'echarts';

export default function GoldChart() {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<ECharts | null>(null);

  const [chartData, setChartData] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);

  // Hardcoded static gold prices (per gram) as per your request
  const currentGoldPricePerGram = 102926.98; // Current price per gram (UPDATED)
  const lastYearGoldPricePerGram = 75987.54;  // Last year's price per gram

  // Function to generate simulated historical gold data
  const generateStaticGoldData = () => {
    setLoading(true);

    // Generate 12 data points, linearly interpolating between last year's price and current price
    // and adding some small randomness for a more realistic look.
    const mockHistoricalData: number[] = [];
    for (let i = 0; i < 12; i++) {
      // Calculate a value based on linear interpolation over 12 months
      const interpolatedValue = lastYearGoldPricePerGram + (currentGoldPricePerGram - lastYearGoldPricePerGram) * (i / 11);
      // Add some minor randomness
      const valueWithRandomness = interpolatedValue + (Math.random() - 0.5) * (interpolatedValue * 0.01); // +/- 1% randomness
      mockHistoricalData.push(round(valueWithRandomness, 2));
    }

    // Ensure the first and last points exactly match the requested values
    // The price from "last year" corresponds to the start of our 12-month chart (July 2024).
    mockHistoricalData[0] = round(lastYearGoldPricePerGram, 2); // July 2024
    mockHistoricalData[11] = round(currentGoldPricePerGram, 2); // June 2025

    setChartData(mockHistoricalData);
    setLoading(false);
  };

  // Helper function for rounding
  const round = (value: number, decimals: number) => {
    return Number(Math.round(Number(value + 'e' + decimals)) + 'e-' + decimals);
  };

  // Effect for generating data on component mount
  useEffect(() => {
    generateStaticGoldData();
  }, []); // Run once on mount

  // Effect for initializing/updating ECharts
  useEffect(() => {
    // Only initialize/update if data is available and not loading
    if (!loading && chartData.length > 0) {
      const initializeChart = () => {
        if (chartRef.current) {
          if (chartInstance.current) {
            chartInstance.current.dispose();
          }

          chartInstance.current = init(chartRef.current, 'light', { renderer: 'svg' });

          const option: EChartsOption = {
            tooltip: {
              trigger: 'axis',
              backgroundColor: 'rgba(250, 243, 233, 0.9)',
              borderColor: '#DFC58A',
              borderWidth: 1,
              textStyle: {
                color: '#3E2723',
                fontFamily: 'Inter, sans-serif',
              },
              padding: 10,
              formatter: function (params: any) {
                const data = params[0];
                if (data) {
                  const date = data.name;
                  const value = data.value;
                  return `<div>${date}: <strong>₹${value}</strong></div>`;
                }
                return '';
              }
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              top: '5%',
              containLabel: true,
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              // Reverted month labels to abbreviated format
              data: ['Jul \'24', 'Aug \'24', 'Sep \'24', 'Oct \'24', 'Nov \'24', 'Dec \'24', 'Jan \'25', 'Feb \'25', 'Mar \'25', 'Apr \'25', 'May \'25', 'Jun \'25'],
              axisLine: { lineStyle: { color: '#DFC58A', width: 1.2 } },
              axisLabel: {
                color: '#BA8759',
                fontFamily: 'Inter, sans-serif',
                margin: 10,
                rotate: 45, // Rotate labels to prevent overlap for longer names
                interval: 0, // Show all labels
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
                fontFamily: 'Inter, sans-serif',
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
                data: chartData, // Use generated data here!
              },
            ],
            animationDuration: 1200,
            animationEasing: 'cubicOut',
          };

          chartInstance.current.setOption(option);
          chartInstance.current.resize();
        }
      };

      initializeChart();

      const resizeChart = () => {
        chartInstance.current?.resize();
      };
      window.addEventListener('resize', resizeChart);

      return () => {
        chartInstance.current?.dispose();
        window.removeEventListener('resize', resizeChart);
      };
    }
  }, [chartData, loading]); // Re-run effect if chartData or loading changes

  if (loading) {
    return (
      <div className="w-full flex-grow flex items-center justify-center" style={{ minHeight: '300px' }}>
        <p className="text-gray-600">Generating gold price chart...</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div
        ref={chartRef}
        className="w-full"
        style={{
          minHeight: '350px', // Increased height for better visibility
          height: '40vh', // Responsive height
        }}
      />
      {/* Disclaimer below the chart */}
      <div className="mt-6 p-3 bg-red-100 text-red-700 border border-red-300 rounded-md text-sm text-center font-medium">
        <p>
          **Important Disclaimer:** This chart displays **fake** data for demonstration purposes only. It should not be used for any financial decisions. Nanhi Sunehri is not responsible for any financial loss incurred based on this information.
        </p>
      </div>
    </div>
  );
}
