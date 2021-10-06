
module.exports = {
    //all the code going to executed when user or admin use the command
    name: 'hello',  //command === ten
    description: "this is a ping command!",
    execute(message, args) {
        
        // let role = message.guild.roles.cache.find(r => r.name === "Stranger")

        // // if(message.member.permission.has("KICK_MEMBERS")){
        // //     message.channel.send('Địt mẹ, Mày được quyền kick');
        // // }

        // //check role dung thi command
        // if(message.member.roles.cache.some(r => r.name === "Stranger")) { //cach khac lay id '893209553087389746'
            message.channel.send('world !!!');
        // } else {
        //     message.channel.send('Quyền đéo đâu đòi gọi tao ???');
        //     // message.member.roles.add('893209553087389746').catch(console.error);  //add role cho ng do or remove role ng do
        // }
   
    }
}