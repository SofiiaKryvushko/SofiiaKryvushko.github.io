document.addEventListener('DOMContentLoaded', function() {
  const table = document.getElementById('table');
  const headers = table.querySelectorAll('th');
  const tableBody = table.querySelector('tbody');
  const rows = tableBody.querySelectorAll('tr');

  const directions = Array.from(headers).map(function(header) {
      return '';
  });

  function transform (index, content) {
      const type = headers[index].getAttribute('data-type');
      switch (type) {
          case 'number':
              return parseFloat(content);
          case 'string':
          default:
              return content;
      }
  }

  function sortColumn(index) {

      const direction = directions[index] || 'asc' || 'desc' || 'normal';

      const multiplier  = (direction === 'asc') ? 1 : (direction === 'desc') ? -1:0;

      const newRows = Array.from(rows);

      newRows.sort(function(rowA, rowB) {
          const cellA = rowA.querySelectorAll('td')[index].innerHTML;
          const cellB = rowB.querySelectorAll('td')[index].innerHTML;

          const a = transform(index, cellA);
          const b = transform(index, cellB);    

          switch (true) {
              case a > b: return 1 * multiplier;
              case a < b: return -1 * multiplier;
              case a === b: return 0;
          }
      });

    
      [].forEach.call(rows, function(row) {
          tableBody.removeChild(row);
      });

    
      if(direction === 'normal'){
        directions[index] = direction === 'normal' ? 'asc' : 'desc';
      } else
      directions[index] = direction === 'asc' ? 'desc' : 'normal';
      

      newRows.forEach(function(newRow) {
          tableBody.appendChild(newRow);
      });
  }

  [].forEach.call(headers, function(header, index) {
      header.addEventListener('click', function() {
          sortColumn(index);
      });
  });
});