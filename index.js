const Router = require("express").Router;


Router.get("/",async(request,response)=>
{
    const getAllPublications= await PublicationModel.find();
    return response.json(
        getAllPublications
    );
}
);








/*Route - /author/publication
Description -add new publication
Access-PUBLIC
Parameters-NONE
Methods-POST
*/

momen.post("/author/public",async(request,response)=>
  {
      const {newPublication}=request.body;
  PublicationModel.create(newPublication);  

  //database.publications.push(newPublication);

  return response.json(
      {message:"publication added successfully"});
});
//

/*Route - /book/name 
Description -update name of the publication
Access-PUBLIC
Parameters-ID
Methods-Put
*/
Router.put("/book/update/publ/:id",async (request,response)=>{
    //foreach dorectly modifies the object or the array 
    //map-New array and then you need to replace it 
    /*database.publications.forEach((publ) =>{
        if(publ.id===request.params.id){
            return publ.id=request.body.newPublication;
       }
   });
       return response.json({publications:database.publications});     
});*/
const updatedPublication =await PublicationModel.findOneAndUpdate({id:request.params.id},
    {
publication:request.body.pubTitle,
    },{
        new:true,
    }
    );


    return response.json({publications
        :updatedPublication});     
});

Router.put("/update/book/:ISBN" ,(request,response)=>
{
    //update the publcation database
    database.publications.forEach((publication)=>{
if (publication.ID===request.body.pubId){
    return publication.books.push(request.params.ISBN);

}
} 
);
//update book database
database.books.forEach((bookk)=>{
    if (bookk.ISBN===request.params.ISBN){
        bookk.publication=request.body.pubId;
return;
}})
;

return response.json({
    books:database.books,
    publications:database.publications,
   
});
});
/*Route - /publication/delete/book
Description -Delete book from publication
Access-Public*/
Router.delete("/delete/book/:ISBN/:pubId", (request,response)=>{

    //update publication database
    database.publications.forEach((publication)=>{
        const newBooksList=publication.books.filter(
            (book)=>book!=request.params.ISBN
        );
        publication.books= newBooksList;
        return;
    } 

);
//update book database
database.books.forEach((book) =>{
    if(book.ISBN===request.params.ISBN){
        book.publication=0//no publication available 
        return;
    }
}
);
return response.json
({
    books:database.books,
    publications:database.publications,
}

);
});
//
Router.put("/update/book/:ISBN" ,(request,response)=>
{
    //update the publcation database
    database.publications.forEach((publication)=>{
if (publication.ID===request.body.pubId){
    return publication.books.push(request.params.ISBN);

}
} 
);
//update book database
database.books.forEach((bookk)=>{
    if (bookk.ISBN===request.params.ISBN){
        bookk.publication=request.body.pubId;
return;
}})
;

return response.json({
    books:database.books,
    publications:database.publications,
   
});
});


const PublicationModel=require("../../database/author");
module.exports=Router;