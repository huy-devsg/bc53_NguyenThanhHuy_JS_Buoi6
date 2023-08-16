document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            navLinks.forEach(function (otherLink) {
                var icon = otherLink.querySelector('i.fa-solid');
                icon.classList.remove('fa-book-open');
                icon.classList.add('fa-book');
            });
            var icon = link.querySelector('i.fa-solid');
            if (icon.classList.contains('fa-book')) {
                icon.classList.remove('fa-book');
                icon.classList.add('fa-book-open');
            } else if (icon.classList.contains('fa-book-open')) {
                icon.classList.remove('fa-book-open');
                icon.classList.add('fa-book');
            }
        });
    });

    // Bài 1: Tìm số nguyên dương nhỏ nhất
    document.getElementById('findINT').addEventListener('submit', function (event) {
        event.preventDefault();
        findINT();
    });

    // Bài 2: Viết chương trình Tính tổng S(n) = x + x^2 + x^3 + ... + x^n 
    document.getElementById('caculatorTotal').addEventListener('submit', function (event) {
        event.preventDefault();
        caculatorTotal();
    });

    // Bài 3: Viết chương trình Tính giai thừa
    document.getElementById('factorial').addEventListener('submit', function (event) {
        event.preventDefault();
        factorial();
    });

    // Bài 4: Viết chương trình khi click vào ra 10 thẻ div
    document.getElementById('createDiv').addEventListener('submit', function (event) {
        event.preventDefault();
        createDiv();
    });
    // Bài 5: Viết chương trình Tìm số nguyên tố
    document.getElementById('isPrime').addEventListener('submit', function (event) {
        event.preventDefault();
        isPrime(inputNumber);
    });
});


// Bài 1 : Viết chương trình Quản lý tuyển sinh
    function findINT() {
    
        // B1: Lấy dữ liệu đầu vào
        
        let sum = 0;
        let sequence = "";
        
        // B2: Xử lý bài toán

        for (let n = 1; sum <= 10000; n++) {
            sum += n;
            result += n;
            if (sum <= 10000) {
                result += "+";
            }
            else
            {
                result= '1+2+...+' +n + ' = ' + sum + ' > 10000';
            }
        }

        // B3: Hiển thị kết quả

        document.getElementById('result').innerText = `👉Kết quả : ${result}`;
    }
// <--------------------------------------------------->


// Bài 2 : Viết chương trình Tính tổng S(n) = x + x^2 + x^3 + ... + x^n 

    function caculatorTotal() {
    
        // B1: Lấy dữ liệu đầu vào

        const numX = +document.getElementById('numX').value;
        const numN = +document.getElementById('numN').value;
        let result2;

        // B2: Xử lý bài toán
       
        let total = 0;
        let totalStr = ''; 

        for (i = 1 ; i<= numN ; i++)
        {
            total+= Math.pow(numX, i);
            if (i<=3)
            {
                totalStr += numX+ '^' +i;
                if (i< numN)
                {
                    totalStr+='+';
                }
            }
        }
        if (numN>3)
        {
            totalStr = numX + ' + ' +numX + '^'+ '2 + ' +numX + '^'+ '3' +'+...+'+numX + '^'+ numN;
        }
        // B3: Hiển thị kết quả

        document.getElementById('result2').innerText = `👉 Tổng: S(${numN}) = ${totalStr}  = ${total} `;
}
// <--------------------------------------------------->


// Bài 3 : Viết chương trình Tính giai thừa

function factorial() {

    // b1: các dữ liệu đầu vào
    const numN2 = document.getElementById('numN2').value;
    let result3;

    // b2: xử lí bài toán
    let multi = 1;
    let multiStr = ''; 

    for (i = 1 ; i<= numN2 ; i++)
    {
        multi*= i ;
        multiStr+= i;
        if (i <= 3 && i < numN2) {
            multiStr += ' * ';
        }
    }   
    if (numN2>3)
    {
        multiStr = '1 * 2 * 3 *...*' + numN2;
    }

    // b3 : các dữ liệu đầu ra

    document.getElementById('result3').innerText = `👉 Giai thừa của (${numN2}) : ${multiStr} = ${multi}`;
};

// // <--------------------------------------------------->


// // Bài 4 : Viết chương trình khi click vào ra 10 thẻ div


function createDiv() {

    // b1: các dữ liệu đầu vào
    let create ='';

    // b2: xử lí bài toán
    for (let i=1 ; i<=10 ; i++)
    {
        if(i%2==0)
        {
            create += `<div style="background:red;height:2px;">
            </div><br>`;
        }
        else
        {
            create += `<div style="background:blue;height:2px;  ">
            </div><br>`;
        }
    }
    

    // b3 : các dữ liệu đầu ra

    document.getElementById('result4').innerHTML=`${create}`;

};
//<--------------------------------------------------->


// // Bài 5 : Viết chương trình Tìm số nguyên tố

    function isPrime(){

    // b1: các dữ liệu đầu vào

    const inputNumber = +document.getElementById("inputNumber").value;

    // b2: xử lí bài toán
    let result5 ='';
    if (inputNumber >= 2) {
      for (let num = 2; num <= inputNumber; num++) {
        let isPrime = true;

        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) {
            isPrime = false;
          }
        }
        if (isPrime) {
         result5 += num + " ";
        }
      }
    }
    else
    {
        result5 = 'Không có số nguyên tố'
    }

    // b3 : các dữ liệu đầu ra

    document.getElementById('result5').innerText=`Các số nguyên tố từ 1 tới N(${inputNumber}) : ${result5}`;
  };

