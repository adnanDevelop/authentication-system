function About() {
  const data = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 30 },
    { id: 3, name: "Doe", age: 28 },
  ];

  return (
    <div className="w-full h-[40vh] flex items-center justify-center">
      <div>
        <h2 className="mb-4 text-2xl font-bold">Sample Table</h2>
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 w-[150px]">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Age</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td className="px-4 w-[150px] py-2">{item.id}</td>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default About;
