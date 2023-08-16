

const Project = ({ item }) => {
  return (
    <div key={item.id} className="flex flex-col items-center text-center">
        <div className="mb-8">
      <img className="rounded-2xl img-project" src={item.image} alt="" />
      </div>
      <p className="capitalize text-accent text-sm mb-3">{item.stack}</p>
      <h3 className="text-2xl font-semibold capitalize mb-3">{item.name}</h3>
      <p className="capitalize  text-sm mb-3">{item.category}</p>
      <a href={item.link}>
      <button className="btn btn-lg bg-accent hover:bg-accent-hover my-6">Ver repositório</button>
      </a>
      
    </div>
  );
};

export default Project;
