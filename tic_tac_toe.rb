class TicTacToe

        def initialize
            @board = [
                [nil, nil, nil], 
                [nil, nil, nil], 
                [nil, nil, nil]
             ]
             @player = false
        end  

        def turn
            @play = !@player
         if @player
            return 'x'
         else 
            return 'o'
         end 
        end

        def is_valid?
            @board[x][y].nil? && @board[x][y] != 'x' && @board[x][y] != 'o'
        end

        def is_win?
         @board[x].uniq? 
         yboard = @board[0..2].transpose()
         yboard[x].uniq?
        end

        def move(x,y)
         if is_valid?
         @board[x][y] = turn
         else 
         puts 'invalid move'
         end 
         if is_win?
         puts 'you win'
         else 
         puts 'next players turn'
         end
        end 

end
=begin
#init grid

[
    [1, 2, 3],
    [2, 4, 5],
    [6, 7, 8]
]

#transposed grid
[
    [1, 2, 6], 
    [2, 4, 7], 
    [3, 5, 8]
]
=end