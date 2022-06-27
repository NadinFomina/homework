createTable(6, 10);
        function createTable(cols, rows) {
            const table = document.createElement('table');
            for (let i = 1; i < rows; i++) {
                const tr = document.createElement('tr');
                for (let y = 1; y < cols; y++) {
                    const td = document.createElement('td');
                    tr.append(td);
                    td.textContent = i +"-"+ y;
                }
                table.append(tr);

            }
            document.body.append(table);
            table.border = 'solid 3px';

        }