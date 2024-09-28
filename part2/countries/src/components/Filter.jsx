function Filter({ country, setCountry }) {
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <label htmlFor="name">Find countries : </label>
          </td>
          <td>
            <input
              type="text"
              name="name"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="e.g. Ghana"
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Filter;
