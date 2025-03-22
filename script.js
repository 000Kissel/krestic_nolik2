let cells = document.querySelectorAll('#field td');
let modal = document.querySelector('#modal');

console.log(cells);
// this - объект 'перед точкой' , который используется для вызова метода
function start(cells) {
    // Счетчик ходов
    let i = 0
    for (let cell of cells) {
        cell.addEventListener('click', function step() {
            // крести появляется ена четное значение счтчика, а 0 на нечетное
            if (i % 2 == 0) {
                this.textContent = '✕';
            } else {
                this.textContent = '⬯'
            }
            // Удалить обработку клика чтобы крестик не менялся на нолик в этой же ячейке
            this.removeEventListener('click', step)

            if (isWinner(cells)) {
                modal.textContent = (`Победил ${this.textContent}`);
            }
            // увеличить счетчик на
            i++;
        })
    }

}

function isWinner(cells) {
    let combs = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    //по очереди в цикле проверяются все возможные комбинации и в результате
    // если есть совпавшие комбинации то функция возвращает true
    for (let comb of combs) {
        if (cells[comb[0]].textContent == cells[comb[1]].textContent &&
            cells[comb[1]].textContent == cells[comb[2]].textContent &&
            cells[comb[0]].textContent != '') {
            return true;
        }
    }
    return false;
}

start(cells);

// cells = [td0, td1, td2, td3, td4, td5, td4, td5, td6, td7, td8]

// combs = [  [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ]

// [0, 1, 2]
