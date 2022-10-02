export const getUser = (req, res, next) => { 
    const {id} = req.params; 
    // 
    res.json(user); 
}

export const getUserByName = (req, res, next) => {
    const {name} = req.query; 
    //
    res.json(user); 
}

export const getUserList = (req, res, next) => {
    // get users from DB 
    res.json(userList);
}

export const postUser = (req, res, next) => {
    const {user} = req.body; 

    res.status(200).json({success:true}); 
}

export const createTodo = (req, res, next) => { 
    // const {body} = req.list; 
    // const 
    res.status(200).json({success:true}); 
}

export const getTodo = (req, res, next) => { 
    const { todo } = req.list; 
    // const 
    res.json(TodoList); 
}

