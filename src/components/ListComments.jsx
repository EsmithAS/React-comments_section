import Comment from "./Comment";

const ListComments = ( { listComments }) => {

    const arrData = [
        {
            comment: "asasdsad",
            date: "Thu May 19 2022",
            id: "t324df28clel3dwgwr1",
            photo: "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            comments: [
                {
                    comment: "asasdsad",
                    date: "Thu May 19 2022",
                    id: "t324df28clel3dwgwrad1",
                    photo: "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    comments: [],
                    score: 0,
                    username: "Esmith AS",
                },
                {
                    comment: "asasdsad",
                    date: "Thu May 19 2022",
                    id: "t324df28clel3dwgwra1",
                    photo: "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    comments: [],
                    score: 0,
                    username: "Esmith AS",
                },
            ],
            score: 0,
            username: "Esmith AS",
        },
        {
            comment: "asasdsad",
            date: "Thu May 19 2022",
            id: "t324df28clel3dwgwrs",
            photo: "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            comments: [],
            score: 0,
            username: "Esmith AS",
        }
    ]

        const data = {
                id : 1,
                comments : [
                    {
                        id : 2,
                        comments : [
                            {
                                id : 3,
                                comments : [
                                    {
                                        id: 15
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id : 4,
                        comments : [
                            {
                                id : 5,
                            }
                        ]
                    }
                ]
            }

    // const procesarComments = ( arr , padding = 0 ) => {
    //     let paddingValue = padding;
    //     arr.forEach(commentData => {
    //         console.log(commentData.id);
    //         if (Object.keys(commentData).includes('comments')) {
    //             paddingValue ++;
    //             procesarComments(commentData.comments, paddingValue);
    //         }
    //     });
    // }

    // procesarComments(data.comments);
    const procesarComments = ( arr, padding = 0 , listCommentProccess = []) => {
        let paddingValue = padding;
        listCommentProccess = arr.map(commentUser => {
            <div style={{'pading-let': paddingValue+'px'}}>
                <Comment key = { commentUser.id } commentUser = { commentUser } />
            </div>
            if (Object.keys(commentUser).includes('comments')) {
                paddingValue ++;
                procesarComments(commentUser.comments , paddingValue , listCommentProccess);
            }
        });
        return listCommentProccess;
    }
   console.log(procesarComments(arrData));

    const mapListComments =  arrData.map( (commentUser) => <Comment key = { commentUser.id } commentUser = { commentUser } /> )

    return (
        <div className="space-y-5 mt-10">
            {mapListComments}
        </div>
        
    )
}

export default ListComments;