let posts = '../somePosts'

let messages = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        const { text, time } = req.body;
        messages.push({ id, text, time });
        id++;
        res.status(200).send(messages);
    },
    read: (req, res) => {
        res.status(200).send(messages);
    },
    update: (req, res) => {
        const { text } = req.body;
        const updateID = req.params.id;
        const messageIndex = messages.findIndex(message => message.id == updateID);
        let message = messages[messageIndex];

        messages[messageIndex] = {
            id: message.id,
            //either change text to the text within the body (See const{text} = req.body) or return the same text
            text: text || message.text,
            time: message.time
        };

        //Send back a status of 200 and alert the user that all is good
        res.status(200).send(messages);

    },
    delete: (req, res) => {
        // Generate an index passed in by the user to know what to delete
        const deleteID = req.params.id;
        messageIndex = messages.findIndex(message => message.id == deleteID)

        //Use the index defined above to delete a message from the array
        messages.splice(messageIndex, 1);

        //Send back the action is completed to the user
        res.status(200).send(messages);

    },
}