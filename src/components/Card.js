import { v4 as uuidv4 } from "uuid";
import EditEmployee from "./EditEmployee";

export default function Card({
  id,
  firstName,
  lastName,
  email,
  skills,
  updateEmployee,
}) {
  return (
    <div className="w-full rounded-lg bg-white p-2 mb-2">
      <div className="flex relative">
        <p className="flex justify-start font-bold">
          {firstName} {lastName}
        </p>
        <div className="ml-48 text-red-600 absolute right-0 max-h-4 ">
          <EditEmployee
            id={id}
            firstName={firstName}
            lastName={lastName}
            email={email}
            skills={skills}
            updateEmployee={updateEmployee}
          />
        </div>
      </div>
      <div className="text-sm py-1">{email}</div>

      <div className="flex space-x-2 mt-2 ">
        {skills.map((skill) => {
          return (
            <div
              key={uuidv4()}
              className="rounded-lg bg-red-600 text-sm text-white px-2 py-1"
            >
              {skill}
            </div>
          );
        })}
      </div>
    </div>
  );
}
