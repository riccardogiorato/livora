import { useState } from "react";
import Head from "next/head";
import DateDiff from "date-diff";
import dynamic from 'next/dynamic'

const WeeksLifeNoSSR = dynamic(
  () => import('../components/WeeksLife'),
  { ssr: false }
)


const Home = () => {
  const sexes = { 0: "Man", 1: "Women" };
  const sex = sexes[0];
  console.log(sex);

  const [resultSearch, setResults] = useState([]);

  const today = new Date();
  const yearToday = today.getFullYear();
  const dateOfBirth = new Date("1996-12-20");

  function nextBirthday(dateOfBirth, today) {
    const monthOfBirth = dateOfBirth.getMonth();
    const dayOfBirth = dateOfBirth.getDate();

    const monthToday = today.getMonth();
    const dayOfToday = today.getDate();

    if (
      monthOfBirth > monthToday ||
      (monthToday == monthOfBirth && dayOfToday > dayOfBirth)
    ) {
      return new Date(
        +yearToday + "-" + (+monthOfBirth + 1) + "-" + dayOfBirth
      );
    } else {
      return new Date(
        +yearToday + 1 + "-" + (+monthOfBirth + 1) + "-" + dayOfBirth
      );
    }
  }

  const nextBirthdayDate = nextBirthday(dateOfBirth, today);

  const currentLife = new DateDiff(today, dateOfBirth);
  const yearsOld = Math.round(currentLife.years());
  const thisYearMonths = Math.round((currentLife.years() - yearsOld) * 10);
  const thisMonthWeeks = currentLife.weeks() / 52;

  const nextBirthdayDiff = new DateDiff(nextBirthdayDate, today);
  const remainingWeeksBirthday = Math.round(nextBirthdayDiff.weeks());
  const thisYearPassedWeeks = 52 - remainingWeeksBirthday;


  return (
    <div className="container">
      <Head>
        <title>All Your Life</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Welcome to your entire life!</h1>

        <p>This "thing" is gone forever! Past: ⚫ ️</p>

        <p>This "thing" can still be lived! Future: ⚪️ ️</p>

        <p>You are {yearsOld}</p>
        {thisYearMonths}
        <p>{thisMonthWeeks}</p>
        <p>{thisMonthWeeks}</p>
        <div id="yourLife">
          <WeeksLifeNoSSR age={yearsOld} pastWeeks={thisYearPassedWeeks} futureWeeks={remainingWeeksBirthday}/>
        </div>
      </main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
        .year {
          width: 100%;
        }
        .past {
          display: inline-block;
          background-color: #171717;
          margin: 1px;
        }
        .future {
          display: inline-block;
          background-color: #fff;
          border: 1px solid #171717;
          margin: 1px;
        }
      `}</style>
    </div>
  );
};

export default Home;
