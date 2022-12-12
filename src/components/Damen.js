export default function Damen({ services }) {
  console.log(services[0]);
  return (
    <>
      {services?.map((service) => (
        <>
          <img src={service.fields.icon.fields.file.url} />
          <h3>{service.fields.category}</h3>
          <h4>
            {service.fields.servicePrice.map((price) => (
              <>
                <p>{price.split(";")[0]}</p>
                <p>{price.split(";")[1]}</p>
              </>
            ))}
          </h4>
        </>
      ))}
    </>
  );
}
