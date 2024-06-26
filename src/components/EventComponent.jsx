function EventComponent() {
  const handleClick = (event) => {
    alert("click me");
    console.log(event.target);
  };

  const handleChange = (event) => {
    alert(event.value);
    console.log(event.value);
  };
  const users = [
    {
      id: 1,
      name: A,
    },
    {
      id: 2,
      name: B,
    },
    {
      id: 3,
      name: C,
    },
    {
      id: 4,
      name: D,
    },
  ];

  return (
    <>
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {users.map((user, index) => {
              return (
                <>
                  <td>{index + 1}</td>
                  <td>{users.name}</td>
                  <td>
                    <button> Sua </button>
                    <button
                      onClick={() => {
                        handleClick;
                      }}
                    >
                      Xoa
                    </button>
                  </td>
                </>
              );
            })}
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default EventComponent;
