(() => {
    function solution(m, n, board) {
        board = board.map(line => line.split(""));
        const stack = [];
        let count = 0;
        function clear() {
            for(let j=0; j<n; j++) {
                for(let i=m-1; i>0; i--) {
                    if(board[i][j] !== 0) continue;
                    for(let x=i-1; x>=0; x--) {
                        if(board[x][j] !== 0) {
                            board[i][j] = board[x][j];
                            board[x][j] = 0;
                            break;
                        }
                    }
                }
            }
        }
        do {
            if(stack.length > 0) {
                // 블럭 제거
                while(stack.length !== 0) {
                    const [i,j] = stack.pop();
                    if(board[i][j] !== 0) {
                        count++;
                        board[i][j] = 0;
                    }

                }
                clear();
                console.log(board);
            }
            for(let i=0; i<m-1; i++) {
                for(let j=0; j<n-1; j++) {
                    
                    const block = board[i][j];
                    if(block === 0) continue;
                    if(board[i+1][j] === block
                      && board[i][j+1] === block
                      && board[i+1][j+1] === block) {
                        stack.push([i,j],[i+1,j],[i,j+1],[i+1,j+1]);
                    }
                }
            }
        } while(stack.length !== 0)
            
        return count;
    }

    const m = 6,
        n = 6,
        board = ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"];

    console.log(solution(m,n, board));
})();