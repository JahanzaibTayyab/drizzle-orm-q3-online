import { db } from "@/lib/drizzle";
import { countries } from "@/db/schema/countries";
import { users } from "@/db/schema/users";

const insertCountry = async () => {
  return await db.insert(countries).values({ name: "India" }).returning();
};

const insertUser = async (values: any) => {
  return await db.insert(users).values(values).returning();
};

export default async function Home(): Promise<JSX.Element> {
  // const country = await insertCountry();
  // const user = await insertUser({
  //   fullName: "Jahanzaib Tayyab",
  //   phone: "03030965057",
  // });
  // const user2 = await insertUser({
  //   fullName: "Jahanzaib Tayyab",
  //   phone: "+923030965057",
  // });
  // console.log("🚀 ~ file: page.tsx:11 ~ Home ~ country:", country);

  const countriesData = await db.select().from(countries);
  console.log("🚀 ~ file: page.tsx:7 ~ Home ~ countriesData:", countriesData);
  const usersData = await db.select().from(users);
  console.log("🚀 ~ file: page.tsx:9 ~ Home ~ usersData:", usersData);

  return (
    <div>
      <div>
        User Data
        {usersData.map((data) => (
          <div key={data.id}>
            User Name : {data.fullName} Phone : {data.phone}
          </div>
        ))}
      </div>
      <div>
        Country Data
        {countriesData.map((data) => (
          <div key={data.id}>Country Name : {data.name}</div>
        ))}
      </div>
    </div>
  );
}
