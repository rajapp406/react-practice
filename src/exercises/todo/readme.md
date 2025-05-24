Todo Task

1. create a form to enter task name with submit button.
2. Store the task in local storage 
3. Read them and show as a list 
4. add update/delete functionality 
5. Fiter them with status


filter state should be intact throughout the life cycle of the table.

1. show active list on load
2. when selecetd completed, show completed. 
    a. When search happen searc only in the filtered data.
    b. select records, delete them.
    c. select records, complete them. 

3. Changing the filter  should empty search.
4. submitting new todo should reset the filters and search.

Without redux, it is difficult to maintain state of search, dropwon and the list. Lets see how it goes with redux.