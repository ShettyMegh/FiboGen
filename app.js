
        const genBtn = document.querySelector("#genBtn");
        const pos = document.querySelector("#pos");
        const tbody = document.querySelector("#tableBody");
        const thead = document.querySelector("#tableHead");
        const resp = document.querySelector(".error")
        let theadData = thead.innerHTML;
        thead.innerHTML = "";


        genBtn.addEventListener("click",()=>{
            tbody.innerHTML = "";
            if(pos.value==0){
                resp.innerText = "input field cannot be empty";
                thead.innerHTML = "";
                return false;
            }

            if(pos.value > 1000){
                resp.innerText = "Limit for Generating fibonacci number is \"1000\" only";
                thead.innerHTML = "";
                return false;
            }

            resp.innerText = "";
            thead.innerHTML = theadData;
            const fibNums = fibo(pos.value);

            console.log(fibNums);
            fibNums.forEach((num,idx)=>{
                const tr = document.createElement("tr");
                const tdNum = document.createElement("td");
                const tdSno = document.createElement("td");

                tdNum.innerText = num;
                tdSno.innerText = `F(${idx+1})`
                tbody.appendChild(tr);
                tr.appendChild(tdSno);
                tr.appendChild(tdNum);


            })


        })

        //fibonacci number generator
        function fibo(pos){
            let res=[1,1],n1=res[0],n2=res[1];
            for (let i=0;i<pos-2;i++) {
                res.push(n1+n2);
                n1=n2;
                n2=res[i+2];
            }
            return res;
           
        }