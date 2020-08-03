var names = 'Josh';

console.log(names);


function career(names) {


    console.log('i am a programmer in training' + 'and my name is' + " " + names);


}
//test
career('jim');


// new object

var jobs = {

    empolyees: ['chef', 'manager', 'server', 'casher'],


    newJob: function () {

        for (var i = 0; i < this.empolyees.length; i++) {

            var availableJobs = this.empolyees[i];

            console.log('Apply for the job you can do best' + " " + availableJobs);



        }




    }



}


console.log(jobs.newJob())


