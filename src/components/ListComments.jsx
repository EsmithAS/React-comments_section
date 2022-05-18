import Comment from "./Comment";

const ListComments = ( { listComments }) => {

    const mapListComments =  listComments.map( (commentUser) => <Comment key = { commentUser.id } commentUser = { commentUser } /> )

    return (
        <div className="space-y-5 mt-10">
            {mapListComments}
        </div>
    )
}

export default ListComments;