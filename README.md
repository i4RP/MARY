# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version
Ruby 2.4.1p111 (2017-03-22 revision 58053) [x86_64-darwin16]

* Rails version
Rails 5.1.6

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
# mary-webapp

MainNetworkのコントラクト
`
var maryABI = [
{
"constant": false,
"inputs": [
  {
    "name": "_address",
    "type": "address"
  }
],
"name": "propose",
"outputs": [],
"payable": true,
"stateMutability": "payable",
"type": "function"
}
]
var maryAddress = "0x1088D8c4F704983552DA27f832FF435F84bA87b4";
`

RopstenNetworkのコントラクト
`
var maryABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			}
		],
		"name": "propose",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	}
]
var maryAddress = "0xb08021A181857A93e8e1194eE2ef86be2EEE7Cb2";
`
