export default function Damen({ services }) {
  console.log(services[0]);
  return (
    <div className="flex flex-col bg-[#white] rounded-xl p-4 m-4 md:w-[300px] border-2">
      {services?.map((service) => (
        <>
          <div className="flex justify-center">
            <img src={service.fields.icon.fields.file.url} />
          </div>

          <div className="flex flex-row justify-between">
            <h3>{service.fields.category}</h3>
          </div>

          <div className="flex flex-col justify-between">
            {service.fields.servicePrice.map((price) => (
              <>
                <div className="text-center text-lg m-4 md:flex md:items-center md:justify-center">
                  <p>{price.split(";")[0]}</p>
                </div>
                <div className="text-center text-lg m-4 md:flex md:items-center md:justify-center">
                  <p>{price.split(";")[1]}</p>
                </div>
              </>
            ))}
          </div>
        </>
      ))}
    </div>
  );
}
