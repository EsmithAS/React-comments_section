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
                    comments: [
                        {
                            comment: "asasdsad",
                            date: "Thu May 19 2022",
                            id: "t324df28clel3dwgwrad551",
                            photo: "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                            comments: [],
                            score: 0,
                            username: "Esmith AS",
                        },
                        {
                            comment: "asasdsad",
                            date: "Thu May 19 2022",
                            id: "t324df28clel3dwgwra87d551",
                            photo: "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                            comments: [],
                            score: 0,
                            username: "Esmith AS",
                        }
                    ],
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
            username: "Esmith AS 1",
        },
        {
            comment: "asasdsad",
            date: "Thu May 19 2022",
            id: "t324df28clel3dwgwrs",
            photo: "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            comments: [],
            score: 0,
            username: "Esmith AS 2",
        }
    ]

    const elementos = [];
    const procesarComments = ( arr , padding = 0, border = '' ) => {
        let paddingValue = padding;
        arr.forEach(commentUser => {
            elementos.push(                
                <div
                    key = { commentUser.id }
                    data-pp={padding}
                    className={border}
                    style={{ paddingLeft: border.length > 0 ? '32px': '0px', marginLeft: 50 * padding }}
                >
                 <Comment commentUser = { commentUser } />
                </div>
            );
            if (Object.keys(commentUser).includes('comments')) {
                paddingValue++;
                const border = commentUser.comments.length > 1 ? 'border-l-4 border-indigo-200' : '';
                procesarComments(commentUser.comments, paddingValue,border);
            }
        });
    }
    procesarComments(arrData);

    return (
        <div className="space-y-5 mt-10">
            {elementos}
        </div>
        
    )
}

export default ListComments;