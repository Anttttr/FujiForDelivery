import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel } from "victory";
import { useSelector } from "react-redux";

const insert = []
const data = [
  ];

export const Statistic = () => {
  const {weekmoney} = useSelector(state => state.user)
  
  weekmoney.map((days, index) => {data.push({quarter: index+1, earnings: Number(days.money), label: days.money}); insert.push(days.date.slice(0,-5))} )
  return (
    <div>
    <h2>Статистика за неделю {insert[0]} - {insert[6]}</h2>
    <VictoryChart domainPadding={20}>
        <VictoryAxis
          tickValues={[1, 2, 3, 4, 5, 6, 7]}
          tickFormat={insert}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => (`${x}p`)}
        />
        <VictoryBar data={data} x="quarter"
        y="earnings" labelComponent={
            <VictoryLabel dx = {13} verticalAnchor="middle" textAnchor="end"/>
          }/>
    </VictoryChart>
    </div>
  );
};


