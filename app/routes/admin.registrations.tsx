import { useEffect, useState } from "react";
import { getRegistration } from "~/services/registrationService";


export default function RegistrationPage() {
    const [registration, setRegistration] = useState([]);

    useEffect(() => {
        getRegistration().then((item) => setRegistration(item));
    }, []);
  return (
    <main>
        {registration?.map((reg,index)=> {
            return <div key={index}>
                {reg?.name}
            </div>
        })}
    </main>
  )
}
