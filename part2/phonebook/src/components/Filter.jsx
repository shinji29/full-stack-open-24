function Filter({ searchQuery, setSearchQuery }) {
  return (
    <table cellPadding={2} cellSpacing={4}>
      <tbody>
        <tr>
          <td>Filter by name : </td>
          <td>
            <input
              type="search"
              placeholder="Enter a name e.g. Mary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Filter;
