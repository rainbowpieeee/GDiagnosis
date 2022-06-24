import {
    Chart,
    ChartTitle,
    ChartLegend,
    ChartSeries,
    ChartTooltip,
    ChartSeriesItem,
    ChartSeriesLabels,
  } from "@progress/kendo-react-charts";
  import { COLORS } from "../../constants";
  
  const renderTooltip = context => {
    const { category, value } = context.point || context;
    return (
      <div>
        {category}: {value} %
      </div>
    );
  };
  
  // Graph data
  const applicationsStatusThisMonth = [
    {
      status: "Неэрозивная рефлюксная болезнь",
      value: Number(localStorage.getItem("Rate1")),
      color: COLORS.accepted,
    },
    {
      status: "Ларингофарингеальный рефлюкс",
      value: Number(localStorage.getItem("Rate2")),
      color: COLORS.interviewing,
    },
    {
      status: "Пищевод Барретта",
      value: Number(localStorage.getItem("Rate3")),
      color: COLORS.rejected,
    },
  ];
  
  // Show category label for each item in the donut graph
  const labelContent = e => e.category;
  
  const Charts = props => {
    return (
      <Chart>
        <ChartTitle text="РЕЗУЛЬТАТ" />
        <ChartLegend visible={false} />
        <ChartTooltip render={renderTooltip} />
        <ChartSeries>
          <ChartSeriesItem
            type="donut"
            data={applicationsStatusThisMonth}
            categoryField="status"
            field="value"
          >
            <ChartSeriesLabels
              color="#fff"
              background="none"
              content={labelContent}
            />
          </ChartSeriesItem>
        </ChartSeries>
      </Chart>
    );
  };
  
  export default Charts;