import React from "react";
import "../styles/agecalculator.css";
import Input from "../components/AgeCalculator/Input";
import CalculateBtn from "../components/AgeCalculator/CalculateBtn";
import ValueText from "../components/AgeCalculator/ValueText";

const AgeCalculator = () => {
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [values, setValues] = React.useState<Record<string, number>>({});

  const calculateAge = (birthdate: Date) => {
    const today = new Date();

    let years = today.getFullYear() - birthdate.getFullYear();
    let months = today.getMonth() - birthdate.getMonth();
    let days = today.getDate() - birthdate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
      years -= 1;
      months += 12;
    }

    if (days < 0) {
      const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
      days += lastMonth.getDate();
      months -= 1;
    }

    setValues({ years, months, days });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const _errors: Record<string, string> = {};
    const formData = new FormData(event.currentTarget);
    const day = formData.get("day") as string;
    const month = formData.get("month") as string;
    const year = formData.get("year") as string;
    const today = new Date();

    if (!day) _errors["day"] = "This field is required";
    if (!month) _errors["month"] = "This field is required";
    if (!year) _errors["year"] = "This field is required";

    if (day && (Number(day) < 1 || Number(day) > 31))
      _errors["day"] = "Must be a valid day";
    if (month && (Number(month) < 1 || Number(month) > 12))
      _errors["month"] = "Must be a valid month";
    if (year && Number(year) > today.getFullYear())
      _errors["year"] = "Must be a valid year";

    if (Object.keys(_errors).length > 0) {
      setErrors(_errors);
    } else {
      setErrors({});
      // calculate age
      const dateString = `${year}-${month}-${day}`;
      calculateAge(new Date(dateString));
    }
  };

  return (
    <div className="w-full min-h-screen light-grey-bg flex justify-center items-center">
      <main className="p-4 md:p-10 bg-white text-black rounded-3xl max-w-[90%] md:min-w-[40%] rounded-br-[90px]">
        <form
          onSubmit={handleSubmit}
          className="w-full flex justify-start items-start space-x-6 pt-6 pb-8 border-b border-b-gray-200 relative"
        >
          <Input
            error={errors["day"]}
            name="day"
            label="day"
            defaultValue={24}
          />
          <Input
            error={errors["month"]}
            name="month"
            label="month"
            defaultValue="09"
          />
          <Input
            error={errors["year"]}
            name="year"
            label="year"
            defaultValue={1984}
          />
          <CalculateBtn />
        </form>
        <article className="flex flex-col mt-8 space-y-2">
          <ValueText value={values["years"] || "-"} text="years" />
          <ValueText value={values["months"] || "-"} text="months" />
          <ValueText value={values["days"] || "-"} text="days" />
        </article>
      </main>
    </div>
  );
};

export default AgeCalculator;
