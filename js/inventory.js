const formbox = document.querySelector('.formbox');
const submitbtn = document.querySelector('.submit');
const productName = document.querySelector('#productname');
const productdescription = document.querySelector('#productdescription');
const addimage = document.querySelector('#addimage');
const addprice = document.querySelector('#addprice');
const addproduct = document.querySelector('#product-list');


formbox.addEventListener('submit', function (e) {
    e.preventDefault();
    productdisplay();

    formbox.reset();


})

function productdisplay() {
    var product = document.createElement('div');
    product.setAttribute('class', 'col-md-3 ');
    product.setAttribute('id', 'products')
    addproduct.append(product);

    if (productName.value ==""){
        alert("enter the values")
    }else{
    
    product.innerHTML = `
                    <div class="card bg-dark" style="width: 18rem;">
                        <img class="card-img-top" src=${addimage.value} alt="Product Image">
                        </div>
                        <div class="card-body text-black">
                            <h5 class="card-title">${productName.value}</h5>
                            <p class="card-text">${productdescription.value}</p>
                            <br />
                            <p><strong>Price: $ ${addprice.value}</strong></p>
                            
                        </div>
                        
                    
            </div>`
    const del = document.createElement("button");
    del.setAttribute('class', 'delbtn')
    del.textContent = 'Remove Item';
    product.append(del);
    del.addEventListener('click', function () {
    product.remove();
    })
} 
}