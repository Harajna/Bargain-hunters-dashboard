import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { getUsersDatesAction } from "../../redux/actions/users";

import { getItemsDatesAction } from "../../redux/actions/items";

import { getReportsDatesAction } from "../../redux/actions/reports";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Chart = ({ aspect, title }) => {
  const dispatch = useDispatch();
  const dates = useSelector((state) => state.users.dates);
  const reportDates = useSelector((state) => state.reports.dates);
  const itemDates = useSelector((state) => state.items.dates);

  let data = [];

  console.log(dates);
  dates &&
    dates.map((user) => {
      let date = user.createdAt.split("T")[0];
      console.log(data);
      const index = data.findIndex((u) => u.name == date);
      console.log(index);
      if (index == -1) {
        data.push({ name: date, Total: 1 });
      } else data[index].Total++;
    });

  let itemData = [];
  var say = 0;
  console.log(itemDates);
  itemDates &&
    itemDates.map((user, say) => {
      let itemDate = user.createdAt.split("T")[0];
      // console.log("itemData",itemData)
      const index = itemData.findIndex((u) => u.name == itemDate);
      // var say = say++
      // console.log("say",say)
      console.log(index);
      if (index == -1) {
        itemData.push({ name: itemDate, Total: 1 });
      } else itemData[index].Total++;
    });

  let reportData = [];

  console.log(reportDates);
  reportDates &&
    reportDates.map((user, say) => {
      let reportDate = user.createdAt.split("T")[0];
      console.log("reportData", reportData);
      const index = reportData.findIndex((u) => u.name == reportDate);
      if (index == -1) {
        reportData.push({ name: reportDate, Total: 1 });
      } else reportData[index].Total++;
    });

  useEffect(() => {
    const fetchDates = async () => {
      await dispatch(getUsersDatesAction());
    };
    fetchDates();
  }, []);
  useEffect(() => {
    const fetchDates = async () => {
      await dispatch(getReportsDatesAction());
    };
    fetchDates();
  }, []);

  useEffect(() => {
    const fetchDates = async () => {
      await dispatch(getItemsDatesAction());
    };
    fetchDates();
  }, []);

  return (
    <>
      <div className="chart w-75">
        <div className="title text-center"><h5>{title}</h5></div>
        <div className="d-flex justify-content-center align-items-center">
          {dates && (
            <ResponsiveContainer width="70%" aspect={aspect}>
              <AreaChart
                width={730}
                height={250}
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="totalusers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="20%" stopColor="#8854d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="gray" />
                <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="Total"
                  stroke="#8994d8"
                  fillOpacity={1}
                  fill="url(#total)"
                />
              </AreaChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
      <br />

      <div className="chart w-75">
        <div className="title text-center">
        <h5> {"Ads published at their respective dates"}</h5>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          {itemDates && (
            <ResponsiveContainer width="70%" aspect={aspect}>
              <AreaChart
                width={730}
                height={250}
                data={itemData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="gray" />
                <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="Total"
                  stroke="#82ca9d"
                  fillOpacity={1}
                  fill="url(#total)"
                />
              </AreaChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>

      <div className="chart w-75">
        <div className="title text-center">
          <h5>{"Reports created at their respective dates"}</h5>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          {reportDates && (
            <ResponsiveContainer width="70%" aspect={aspect}>
              <AreaChart
                width={730}
                height={250}
                data={reportData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="20%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="90%" stopColor="#8884d8" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="gray" />
                <CartesianGrid strokeDasharray="4 4" className="chartGrid" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="Total"
                  stroke="#e91e63"
                  fillOpacity={1}
                  fill="url(#total)"
                />
              </AreaChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </>
  );
};

export default Chart;
