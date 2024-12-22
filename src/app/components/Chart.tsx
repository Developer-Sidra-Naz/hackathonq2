"use client"

import * as React from "react"
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { browser: "Sport Car", visitors: 17439, fill: "var(--color-chrome)" },
  { browser: "SUV", visitors: 9478, fill: "var(--color-safari)" },
  { browser: "Coupe", visitors: 18197, fill: "var(--color-firefox)" },
  { browser: "Hatchback", visitors: 12510, fill: "var(--color-edge)" },
  { browser: "MPV", visitors: 14406, fill: "var(--color-other)" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function Chart() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
  }, [])

  return (
    <div className="bg-white rounded-md m-0">
          <CardHeader className="pb-0 w-full">
          <CardTitle>Top 5 Rental Cars</CardTitle>
        </CardHeader>
    <Card className="lg:flex flex-row border-none ">
      {/* Chart Section */}
      <div className="flex-1 w-full lg:w-5/12">
      
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[250px]"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="visitors"
                nameKey="browser"
                innerRadius={60}
                strokeWidth={5}
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-3xl font-bold"
                          >
                            {totalVisitors.toLocaleString()}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground"
                          >
                          Rental Cars
                          </tspan>
                        </text>
                      )
                    }
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </CardContent>
      </div>

      {/* Data Section */}
      <div className="flex-1 p-4 space-y-4 w-full lg:w-7/12">

        <ul className="space-y-2">
          {chartData.map((item) => (
            <li key={item.browser} className="flex justify-between">
              <span className="font-medium">{item.browser}</span>
              <span className="text-gray-600">{item.visitors.toLocaleString()}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
    </div>
  )
}
