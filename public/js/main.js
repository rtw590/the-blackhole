$(document).ready(function(){
    $('.delete-post').on('click', function(e){
        $target = $(e.target);
        const id = $target.attr('data-id');
        $.ajax({
            type: 'DELETE',
            url: '/posts/'+id,
            success: function(response){
                alert('Post Deleted');
                window.location.href='/';
            },
            error: function(err) {
                console.log(err);
            }
        });
    });
});


// $(document).ready(function(){
//     $('.upvote-post').on('click', function(e){
//         $target = $(e.target);
//         const id = $target.attr('data-id');
//         console.log('Clicked')
//     });
// });