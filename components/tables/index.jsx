import React from "react";
import styles from "./CustomTable.module.scss";

export default function CustomTable({ type }) {
  if (type === "eventSchedule") {
    return (
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Day</th>
            <th>Time</th>
            <th>Event</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2nd Mondays</td>
            <td>1-3pm</td>
            <td>
              Lap Quilts Sewing Group
              <br />
              (not yet resumed)
            </td>
          </tr>
          <tr>
            <td>
              Mondays
              <br />
              (2nd and 4th)
            </td>
            <td>6:30pm</td>
            <td>Choir and Praise Practice</td>
          </tr>
          <tr>
            <td>
              Monday
              <br />
              (3rd)
            </td>
            <td>6:30pm</td>
            <td>Women of Faith Bible Study</td>
          </tr>
          <tr>
            <td>Tuesdays</td>
            <td>10am - 3pm </td>
            <td>Quilting Ladies of St. Paul&apos;s</td>
          </tr>
          <tr>
            <td>1st and 3rd Wednesdays</td>
            <td>9:00am</td>
            <td>Men&apos;s Prayer Breakfast (not yet resumed) </td>
          </tr>
          <tr>
            <td>2nd Wednesday </td>
            <td>
              6:00pm
              <br />
              7:00pm
            </td>
            <td>
              Church and Ministry Meeting
              <br />
              Church Council Meeting
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
  if (type === "weeklyService") {
    return (
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Day</th>
            <th>Time</th>
            <th>Event</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sunday</td>
            <td>10:00AM</td>
            <td>Worship Service</td>
          </tr>
          <tr>
            <td>Tuesdays</td>
            <td>6:30PM</td>
            <td>Evening Bible Study </td>
          </tr>
          <tr>
            <td>Thursdays</td>
            <td>10:00AM</td>
            <td>Morning Bible Study</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
