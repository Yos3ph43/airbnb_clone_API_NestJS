{
	"info": {
		"_postman_id": "84f49e4a-e7ca-4f76-b7f7-8b0949aca8dd",
		"name": "Api Airbnb",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "23671382"
	},
	"item": [
		{
			"name": "Hoang Hai",
			"item": [
				{
					"name": "searchRoomById",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOjMsIm5hbWUiOiJuYW1lIiwiZW1haWwiOiJsdWFuQG1haWwubWFpbCIsInBhc3N3b3JkIjoiKioqKiIsInBob25lIjoiMTIzNCIsImJpcnRoZGF5IjoibWVoIiwiZ2VuZGVyIjoiYW50aS1haXIiLCJyb2xlIjoiYWRtaW4iLCJhdmF0YXIiOm51bGx9LCJpYXQiOjE2ODA3MDkwODIsImV4cCI6MTcxMjI2NjY4Mn0.alTaKaqmuofP1Y3x4tXWjhESJ56UIj-mRn3cWIywXLo",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{domain}}/room/searchRoomById/:room_id",
							"host": [
								"{{domain}}"
							],
							"path": [
								"room",
								"searchRoomById",
								":room_id"
							],
							"variable": [
								{
									"key": "room_id",
									"value": "1"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "searchRoomPagination",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOjMsIm5hbWUiOiJuYW1lIiwiZW1haWwiOiJsdWFuQG1haWwubWFpbCIsInBhc3N3b3JkIjoiKioqKiIsInBob25lIjoiMTIzNCIsImJpcnRoZGF5IjoibWVoIiwiZ2VuZGVyIjoiYW50aS1haXIiLCJyb2xlIjoiYWRtaW4iLCJhdmF0YXIiOm51bGx9LCJpYXQiOjE2ODA3MDkwODIsImV4cCI6MTcxMjI2NjY4Mn0.alTaKaqmuofP1Y3x4tXWjhESJ56UIj-mRn3cWIywXLo",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{domain}}/room/searchRoomPagination?page (Chọn trang)=1&pageSize (Số item trong 1 trang)=2&roomName (Tên phòng)=a",
							"host": [
								"{{domain}}"
							],
							"path": [
								"room",
								"searchRoomPagination"
							],
							"query": [
								{
									"key": "page (Chọn trang)",
									"value": "1"
								},
								{
									"key": "pageSize (Số item trong 1 trang)",
									"value": "2"
								},
								{
									"key": "roomName (Tên phòng)",
									"value": "a"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "deleteRoomById",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOjMsIm5hbWUiOiJuYW1lIiwiZW1haWwiOiJsdWFuQG1haWwubWFpbCIsInBhc3N3b3JkIjoiKioqKiIsInBob25lIjoiMTIzNCIsImJpcnRoZGF5IjoibWVoIiwiZ2VuZGVyIjoiYW50aS1haXIiLCJyb2xlIjoiYWRtaW4iLCJhdmF0YXIiOm51bGx9LCJpYXQiOjE2ODA3MDkwODIsImV4cCI6MTcxMjI2NjY4Mn0.alTaKaqmuofP1Y3x4tXWjhESJ56UIj-mRn3cWIywXLo",
									"type": "string"
								}
							]
						},
						"method": "DELETE",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{domain}}/room/deleteRoomById/:room_id",
							"host": [
								"{{domain}}"
							],
							"path": [
								"room",
								"deleteRoomById",
								":room_id"
							],
							"variable": [
								{
									"key": "room_id",
									"value": "1"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "updateRoomById",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOjMsIm5hbWUiOiJuYW1lIiwiZW1haWwiOiJsdWFuQG1haWwubWFpbCIsInBhc3N3b3JkIjoiKioqKiIsInBob25lIjoiMTIzNCIsImJpcnRoZGF5IjoibWVoIiwiZ2VuZGVyIjoiYW50aS1haXIiLCJyb2xlIjoiYWRtaW4iLCJhdmF0YXIiOm51bGx9LCJpYXQiOjE2ODA3MDkwODIsImV4cCI6MTcxMjI2NjY4Mn0.alTaKaqmuofP1Y3x4tXWjhESJ56UIj-mRn3cWIywXLo",
									"type": "string"
								}
							]
						},
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"room_id\":2,\r\n    \"location_id\":2,\r\n    \"room_name\":\"Room 128\",\r\n    \"guests\":1,\r\n    \"bedrooms\":2,\r\n    \"beds\":4,\r\n    \"bathrooms\":2,\r\n    \"description\":\"Thoáng mát\",\r\n    \"price\":3000000,\r\n    \"washer\":1,\r\n    \"iron\":1,\r\n    \"television\":1,\r\n    \"air_con\":1,\r\n    \"wifi\":1,\r\n    \"kitchen\":0,\r\n    \"parking_lot\":1,\r\n    \"pool\":1\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{domain}}/room/updateRoomById",
							"host": [
								"{{domain}}"
							],
							"path": [
								"room",
								"updateRoomById"
							]
						}
					},
					"response": []
				},
				{
					"name": "uploadRoomImageById",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOjMsIm5hbWUiOiJuYW1lIiwiZW1haWwiOiJsdWFuQG1haWwubWFpbCIsInBhc3N3b3JkIjoiKioqKiIsInBob25lIjoiMTIzNCIsImJpcnRoZGF5IjoibWVoIiwiZ2VuZGVyIjoiYW50aS1haXIiLCJyb2xlIjoiYWRtaW4iLCJhdmF0YXIiOm51bGx9LCJpYXQiOjE2ODA3MDkwODIsImV4cCI6MTcxMjI2NjY4Mn0.alTaKaqmuofP1Y3x4tXWjhESJ56UIj-mRn3cWIywXLo",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "formdata",
							"formdata": [
								{
									"key": "fileUpload",
									"type": "file",
									"src": "/C:/Users/HoangHai/Desktop/2023-04-06_214519.jpg"
								}
							]
						},
						"url": {
							"raw": "{{domain}}/room/uploadRoomImageById/:room_id",
							"host": [
								"{{domain}}"
							],
							"path": [
								"room",
								"uploadRoomImageById",
								":room_id"
							],
							"variable": [
								{
									"key": "room_id",
									"value": "2"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "getLocation",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOjMsIm5hbWUiOiJuYW1lIiwiZW1haWwiOiJsdWFuQG1haWwubWFpbCIsInBhc3N3b3JkIjoiKioqKiIsInBob25lIjoiMTIzNCIsImJpcnRoZGF5IjoibWVoIiwiZ2VuZGVyIjoiYW50aS1haXIiLCJyb2xlIjoiYWRtaW4iLCJhdmF0YXIiOm51bGx9LCJpYXQiOjE2ODA3MDkwODIsImV4cCI6MTcxMjI2NjY4Mn0.alTaKaqmuofP1Y3x4tXWjhESJ56UIj-mRn3cWIywXLo",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{domain}}/location/getLocation",
							"host": [
								"{{domain}}"
							],
							"path": [
								"location",
								"getLocation"
							]
						}
					},
					"response": []
				},
				{
					"name": "searchLocationById",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOjMsIm5hbWUiOiJuYW1lIiwiZW1haWwiOiJsdWFuQG1haWwubWFpbCIsInBhc3N3b3JkIjoiKioqKiIsInBob25lIjoiMTIzNCIsImJpcnRoZGF5IjoibWVoIiwiZ2VuZGVyIjoiYW50aS1haXIiLCJyb2xlIjoiYWRtaW4iLCJhdmF0YXIiOm51bGx9LCJpYXQiOjE2ODA3MDkwODIsImV4cCI6MTcxMjI2NjY4Mn0.alTaKaqmuofP1Y3x4tXWjhESJ56UIj-mRn3cWIywXLo",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{domain}}/location/searchLocationById/:location_id",
							"host": [
								"{{domain}}"
							],
							"path": [
								"location",
								"searchLocationById",
								":location_id"
							],
							"variable": [
								{
									"key": "location_id",
									"value": "2"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "searchLocationPagination",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOjMsIm5hbWUiOiJuYW1lIiwiZW1haWwiOiJsdWFuQG1haWwubWFpbCIsInBhc3N3b3JkIjoiKioqKiIsInBob25lIjoiMTIzNCIsImJpcnRoZGF5IjoibWVoIiwiZ2VuZGVyIjoiYW50aS1haXIiLCJyb2xlIjoiYWRtaW4iLCJhdmF0YXIiOm51bGx9LCJpYXQiOjE2ODA3MDkwODIsImV4cCI6MTcxMjI2NjY4Mn0.alTaKaqmuofP1Y3x4tXWjhESJ56UIj-mRn3cWIywXLo",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{domain}}/location/searchLocationPagination?page (Chọn trang)=1&pageSize (Số item trong 1 trang)=2&locationName (Tên địa điểm)=oo",
							"host": [
								"{{domain}}"
							],
							"path": [
								"location",
								"searchLocationPagination"
							],
							"query": [
								{
									"key": "page (Chọn trang)",
									"value": "1"
								},
								{
									"key": "pageSize (Số item trong 1 trang)",
									"value": "2"
								},
								{
									"key": "locationName (Tên địa điểm)",
									"value": "oo"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "deleteLocationbyId",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOjMsIm5hbWUiOiJuYW1lIiwiZW1haWwiOiJsdWFuQG1haWwubWFpbCIsInBhc3N3b3JkIjoiKioqKiIsInBob25lIjoiMTIzNCIsImJpcnRoZGF5IjoibWVoIiwiZ2VuZGVyIjoiYW50aS1haXIiLCJyb2xlIjoiYWRtaW4iLCJhdmF0YXIiOm51bGx9LCJpYXQiOjE2ODA3MDkwODIsImV4cCI6MTcxMjI2NjY4Mn0.alTaKaqmuofP1Y3x4tXWjhESJ56UIj-mRn3cWIywXLo",
									"type": "string"
								}
							]
						},
						"method": "DELETE",
						"header": [],
						"url": {
							"raw": "{{domain}}/location/deleteLocationbyId/:location_id",
							"host": [
								"{{domain}}"
							],
							"path": [
								"location",
								"deleteLocationbyId",
								":location_id"
							],
							"variable": [
								{
									"key": "location_id",
									"value": "3"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "postLocation",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOjMsIm5hbWUiOiJuYW1lIiwiZW1haWwiOiJsdWFuQG1haWwubWFpbCIsInBhc3N3b3JkIjoiKioqKiIsInBob25lIjoiMTIzNCIsImJpcnRoZGF5IjoibWVoIiwiZ2VuZGVyIjoiYW50aS1haXIiLCJyb2xlIjoiYWRtaW4iLCJhdmF0YXIiOm51bGx9LCJpYXQiOjE2ODA3MDkwODIsImV4cCI6MTcxMjI2NjY4Mn0.alTaKaqmuofP1Y3x4tXWjhESJ56UIj-mRn3cWIywXLo",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"location_name\": \"Quận 3\",\r\n  \"city\": \"Hà Nội\",\r\n  \"country\": \"Việt Nam\",\r\n  \"picture\": \"picture 4\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{domain}}/location/postLocation",
							"host": [
								"{{domain}}"
							],
							"path": [
								"location",
								"postLocation"
							]
						}
					},
					"response": []
				},
				{
					"name": "updateLocationById",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOjMsIm5hbWUiOiJuYW1lIiwiZW1haWwiOiJsdWFuQG1haWwubWFpbCIsInBhc3N3b3JkIjoiKioqKiIsInBob25lIjoiMTIzNCIsImJpcnRoZGF5IjoibWVoIiwiZ2VuZGVyIjoiYW50aS1haXIiLCJyb2xlIjoiYWRtaW4iLCJhdmF0YXIiOm51bGx9LCJpYXQiOjE2ODA3MDkwODIsImV4cCI6MTcxMjI2NjY4Mn0.alTaKaqmuofP1Y3x4tXWjhESJ56UIj-mRn3cWIywXLo",
									"type": "string"
								}
							]
						},
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"location_id\": 2,\r\n  \"location_name\": \"Quận Gò Vấp\",\r\n  \"city\": \"Hồ Chí Minh\",\r\n  \"country\": \"Việt Nam\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{domain}}/location/updateLocationById",
							"host": [
								"{{domain}}"
							],
							"path": [
								"location",
								"updateLocationById"
							]
						}
					},
					"response": []
				},
				{
					"name": "uploadLocationImageById",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOjMsIm5hbWUiOiJuYW1lIiwiZW1haWwiOiJsdWFuQG1haWwubWFpbCIsInBhc3N3b3JkIjoiKioqKiIsInBob25lIjoiMTIzNCIsImJpcnRoZGF5IjoibWVoIiwiZ2VuZGVyIjoiYW50aS1haXIiLCJyb2xlIjoiYWRtaW4iLCJhdmF0YXIiOm51bGx9LCJpYXQiOjE2ODA3MDkwODIsImV4cCI6MTcxMjI2NjY4Mn0.alTaKaqmuofP1Y3x4tXWjhESJ56UIj-mRn3cWIywXLo",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "formdata",
							"formdata": [
								{
									"key": "fileUpload",
									"type": "file",
									"src": "/C:/Users/HoangHai/Desktop/2023-04-07_223833.jpg"
								}
							]
						},
						"url": {
							"raw": "{{domain}}/location/uploadLocationPictureById/:location_id",
							"host": [
								"{{domain}}"
							],
							"path": [
								"location",
								"uploadLocationPictureById",
								":location_id"
							],
							"variable": [
								{
									"key": "location_id",
									"value": "2"
								}
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Minh Luan",
			"item": [
				{
					"name": "get comment",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOjMsIm5hbWUiOiJuYW1lIiwiZW1haWwiOiJsdWFuQG1haWwubWFpbCIsInBhc3N3b3JkIjoiKioqKiIsInBob25lIjoiMTIzNCIsImJpcnRoZGF5IjoibWVoIiwiZ2VuZGVyIjoiYW50aS1haXIiLCJyb2xlIjoiYWRtaW4iLCJhdmF0YXIiOm51bGx9LCJpYXQiOjE2ODA3MDkwODIsImV4cCI6MTcxMjI2NjY4Mn0.alTaKaqmuofP1Y3x4tXWjhESJ56UIj-mRn3cWIywXLo",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{domain}}/comment/getComment",
							"host": [
								"{{domain}}"
							],
							"path": [
								"comment",
								"getComment"
							]
						}
					},
					"response": []
				},
				{
					"name": "get comment by room_id",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOjMsIm5hbWUiOiJuYW1lIiwiZW1haWwiOiJsdWFuQG1haWwubWFpbCIsInBhc3N3b3JkIjoiKioqKiIsInBob25lIjoiMTIzNCIsImJpcnRoZGF5IjoibWVoIiwiZ2VuZGVyIjoiYW50aS1haXIiLCJyb2xlIjoiYWRtaW4iLCJhdmF0YXIiOm51bGx9LCJpYXQiOjE2ODA3MDkwODIsImV4cCI6MTcxMjI2NjY4Mn0.alTaKaqmuofP1Y3x4tXWjhESJ56UIj-mRn3cWIywXLo",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{domain}}/comment/getCommentByRoom/:room_id",
							"host": [
								"{{domain}}"
							],
							"path": [
								"comment",
								"getCommentByRoom",
								":room_id"
							],
							"variable": [
								{
									"key": "room_id",
									"value": "1"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "signup",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOjMsIm5hbWUiOiJuYW1lIiwiZW1haWwiOiJsdWFuQG1haWwubWFpbCIsInBhc3N3b3JkIjoiKioqKiIsInBob25lIjoiMTIzNCIsImJpcnRoZGF5IjoibWVoIiwiZ2VuZGVyIjoiYW50aS1haXIiLCJyb2xlIjoiYWRtaW4iLCJhdmF0YXIiOm51bGx9LCJpYXQiOjE2ODA3MDkwODIsImV4cCI6MTcxMjI2NjY4Mn0.alTaKaqmuofP1Y3x4tXWjhESJ56UIj-mRn3cWIywXLo",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"name\": \"name\",\r\n    \"email\": \"luan@mail.mail\",\r\n    \"password\": \"1234\",\r\n    \"phone\": \"1234\",\r\n    \"birthday\": \"meh\",\r\n    \"gender\": \"anti-air\",\r\n    \"role\": \"admin\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{domain}}/api/auth/signup",
							"host": [
								"{{domain}}"
							],
							"path": [
								"api",
								"auth",
								"signup"
							]
						}
					},
					"response": []
				},
				{
					"name": "login",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOjMsIm5hbWUiOiJuYW1lIiwiZW1haWwiOiJsdWFuQG1haWwubWFpbCIsInBhc3N3b3JkIjoiKioqKiIsInBob25lIjoiMTIzNCIsImJpcnRoZGF5IjoibWVoIiwiZ2VuZGVyIjoiYW50aS1haXIiLCJyb2xlIjoiYWRtaW4iLCJhdmF0YXIiOm51bGx9LCJpYXQiOjE2ODA3MDkwODIsImV4cCI6MTcxMjI2NjY4Mn0.alTaKaqmuofP1Y3x4tXWjhESJ56UIj-mRn3cWIywXLo",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"email\": \"luan@mail.mail\",\r\n    \"password\": \"1234\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{domain}}/api/auth/login",
							"host": [
								"{{domain}}"
							],
							"path": [
								"api",
								"auth",
								"login"
							]
						}
					},
					"response": []
				},
				{
					"name": "post comment",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOjMsIm5hbWUiOiJuYW1lIiwiZW1haWwiOiJsdWFuQG1haWwubWFpbCIsInBhc3N3b3JkIjoiKioqKiIsInBob25lIjoiMTIzNCIsImJpcnRoZGF5IjoibWVoIiwiZ2VuZGVyIjoiYW50aS1haXIiLCJyb2xlIjoiYWRtaW4iLCJhdmF0YXIiOm51bGx9LCJpYXQiOjE2ODA3MDkwODIsImV4cCI6MTcxMjI2NjY4Mn0.alTaKaqmuofP1Y3x4tXWjhESJ56UIj-mRn3cWIywXLo",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"content\": \"test comment\",\r\n    \"star_rating\": 5\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{domain}}/comment/postComment/:room_id/:user_id",
							"host": [
								"{{domain}}"
							],
							"path": [
								"comment",
								"postComment",
								":room_id",
								":user_id"
							],
							"variable": [
								{
									"key": "room_id",
									"value": "1"
								},
								{
									"key": "user_id",
									"value": "1"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "update comment",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOjMsIm5hbWUiOiJuYW1lIiwiZW1haWwiOiJsdWFuQG1haWwubWFpbCIsInBhc3N3b3JkIjoiKioqKiIsInBob25lIjoiMTIzNCIsImJpcnRoZGF5IjoibWVoIiwiZ2VuZGVyIjoiYW50aS1haXIiLCJyb2xlIjoiYWRtaW4iLCJhdmF0YXIiOm51bGx9LCJpYXQiOjE2ODA3MDkwODIsImV4cCI6MTcxMjI2NjY4Mn0.alTaKaqmuofP1Y3x4tXWjhESJ56UIj-mRn3cWIywXLo",
									"type": "string"
								}
							]
						},
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"content\": \"test comment updated 2\",\r\n    \"star_rating\": 4\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{domain}}/comment/updateComment/:comment_id",
							"host": [
								"{{domain}}"
							],
							"path": [
								"comment",
								"updateComment",
								":comment_id"
							],
							"variable": [
								{
									"key": "comment_id",
									"value": "4"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "delete comment",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOjMsIm5hbWUiOiJuYW1lIiwiZW1haWwiOiJsdWFuQG1haWwubWFpbCIsInBhc3N3b3JkIjoiKioqKiIsInBob25lIjoiMTIzNCIsImJpcnRoZGF5IjoibWVoIiwiZ2VuZGVyIjoiYW50aS1haXIiLCJyb2xlIjoiYWRtaW4iLCJhdmF0YXIiOm51bGx9LCJpYXQiOjE2ODA3MDkwODIsImV4cCI6MTcxMjI2NjY4Mn0.alTaKaqmuofP1Y3x4tXWjhESJ56UIj-mRn3cWIywXLo",
									"type": "string"
								}
							]
						},
						"method": "DELETE",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{domain}}/comment/deleteComment/:comment_id",
							"host": [
								"{{domain}}"
							],
							"path": [
								"comment",
								"deleteComment",
								":comment_id"
							],
							"variable": [
								{
									"key": "comment_id",
									"value": "5"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "post booking",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOjMsIm5hbWUiOiJuYW1lIiwiZW1haWwiOiJsdWFuQG1haWwubWFpbCIsInBhc3N3b3JkIjoiKioqKiIsInBob25lIjoiMTIzNCIsImJpcnRoZGF5IjoibWVoIiwiZ2VuZGVyIjoiYW50aS1haXIiLCJyb2xlIjoiYWRtaW4iLCJhdmF0YXIiOm51bGx9LCJpYXQiOjE2ODA3MDkwODIsImV4cCI6MTcxMjI2NjY4Mn0.alTaKaqmuofP1Y3x4tXWjhESJ56UIj-mRn3cWIywXLo",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"checkin\": \"2023-03-30T20:02:10.000Z\",\r\n    \"checkout\": \"2023-04-10T10:30:10.000Z\",\r\n    \"guests\": 4\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{domain}}/booking/postBooking/:room_id/:user_id",
							"host": [
								"{{domain}}"
							],
							"path": [
								"booking",
								"postBooking",
								":room_id",
								":user_id"
							],
							"variable": [
								{
									"key": "room_id",
									"value": "2"
								},
								{
									"key": "user_id",
									"value": "9"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "update booking",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOjMsIm5hbWUiOiJuYW1lIiwiZW1haWwiOiJsdWFuQG1haWwubWFpbCIsInBhc3N3b3JkIjoiKioqKiIsInBob25lIjoiMTIzNCIsImJpcnRoZGF5IjoibWVoIiwiZ2VuZGVyIjoiYW50aS1haXIiLCJyb2xlIjoiYWRtaW4iLCJhdmF0YXIiOm51bGx9LCJpYXQiOjE2ODA3MDkwODIsImV4cCI6MTcxMjI2NjY4Mn0.alTaKaqmuofP1Y3x4tXWjhESJ56UIj-mRn3cWIywXLo",
									"type": "string"
								}
							]
						},
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"checkin\": \"2023-03-30T20:02:10.000Z\",\r\n    \"checkout\": \"2023-04-12T10:30:10.000Z\",\r\n    \"guests\": 6\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{domain}}/booking/updateBooking/:booking_id",
							"host": [
								"{{domain}}"
							],
							"path": [
								"booking",
								"updateBooking",
								":booking_id"
							],
							"variable": [
								{
									"key": "booking_id",
									"value": "5"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "delete booking",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOjMsIm5hbWUiOiJuYW1lIiwiZW1haWwiOiJsdWFuQG1haWwubWFpbCIsInBhc3N3b3JkIjoiKioqKiIsInBob25lIjoiMTIzNCIsImJpcnRoZGF5IjoibWVoIiwiZ2VuZGVyIjoiYW50aS1haXIiLCJyb2xlIjoiYWRtaW4iLCJhdmF0YXIiOm51bGx9LCJpYXQiOjE2ODA3MDkwODIsImV4cCI6MTcxMjI2NjY4Mn0.alTaKaqmuofP1Y3x4tXWjhESJ56UIj-mRn3cWIywXLo",
									"type": "string"
								}
							]
						},
						"method": "DELETE",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{domain}}/booking/deleteBooking/:booking_id",
							"host": [
								"{{domain}}"
							],
							"path": [
								"booking",
								"deleteBooking",
								":booking_id"
							],
							"variable": [
								{
									"key": "booking_id",
									"value": "5"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "get booking",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOjMsIm5hbWUiOiJuYW1lIiwiZW1haWwiOiJsdWFuQG1haWwubWFpbCIsInBhc3N3b3JkIjoiKioqKiIsInBob25lIjoiMTIzNCIsImJpcnRoZGF5IjoibWVoIiwiZ2VuZGVyIjoiYW50aS1haXIiLCJyb2xlIjoiYWRtaW4iLCJhdmF0YXIiOm51bGx9LCJpYXQiOjE2ODA3MDkwODIsImV4cCI6MTcxMjI2NjY4Mn0.alTaKaqmuofP1Y3x4tXWjhESJ56UIj-mRn3cWIywXLo",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{domain}}/booking/getBooking",
							"host": [
								"{{domain}}"
							],
							"path": [
								"booking",
								"getBooking"
							]
						}
					},
					"response": []
				},
				{
					"name": "get booking by id",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOjMsIm5hbWUiOiJuYW1lIiwiZW1haWwiOiJsdWFuQG1haWwubWFpbCIsInBhc3N3b3JkIjoiKioqKiIsInBob25lIjoiMTIzNCIsImJpcnRoZGF5IjoibWVoIiwiZ2VuZGVyIjoiYW50aS1haXIiLCJyb2xlIjoiYWRtaW4iLCJhdmF0YXIiOm51bGx9LCJpYXQiOjE2ODA3MDkwODIsImV4cCI6MTcxMjI2NjY4Mn0.alTaKaqmuofP1Y3x4tXWjhESJ56UIj-mRn3cWIywXLo",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{domain}}/booking/getBookingById/:booking_id",
							"host": [
								"{{domain}}"
							],
							"path": [
								"booking",
								"getBookingById",
								":booking_id"
							],
							"variable": [
								{
									"key": "booking_id",
									"value": "5"
								}
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Sy Bao",
			"item": [
				{
					"name": "getBookingByUserId(user_id)",
					"protocolProfileBehavior": {
						"disabledSystemHeaders": {}
					},
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOjMsIm5hbWUiOiJuYW1lIiwiZW1haWwiOiJsdWFuQG1haWwubWFpbCIsInBhc3N3b3JkIjoiKioqKiIsInBob25lIjoiMTIzNCIsImJpcnRoZGF5IjoibWVoIiwiZ2VuZGVyIjoiYW50aS1haXIiLCJyb2xlIjoiYWRtaW4iLCJhdmF0YXIiOm51bGx9LCJpYXQiOjE2ODA3MDkwODIsImV4cCI6MTcxMjI2NjY4Mn0.alTaKaqmuofP1Y3x4tXWjhESJ56UIj-mRn3cWIywXLo",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{domain}}/booking/getBookingByUserId/:user_id",
							"host": [
								"{{domain}}"
							],
							"path": [
								"booking",
								"getBookingByUserId",
								":user_id"
							],
							"variable": [
								{
									"key": "user_id",
									"value": "1"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "getUser",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOjMsIm5hbWUiOiJuYW1lIiwiZW1haWwiOiJsdWFuQG1haWwubWFpbCIsInBhc3N3b3JkIjoiKioqKiIsInBob25lIjoiMTIzNCIsImJpcnRoZGF5IjoibWVoIiwiZ2VuZGVyIjoiYW50aS1haXIiLCJyb2xlIjoiYWRtaW4iLCJhdmF0YXIiOm51bGx9LCJpYXQiOjE2ODA3MDkwODIsImV4cCI6MTcxMjI2NjY4Mn0.alTaKaqmuofP1Y3x4tXWjhESJ56UIj-mRn3cWIywXLo",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{domain}}/user/getUser",
							"host": [
								"{{domain}}"
							],
							"path": [
								"user",
								"getUser"
							]
						}
					},
					"response": []
				},
				{
					"name": "addUser",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOjMsIm5hbWUiOiJuYW1lIiwiZW1haWwiOiJsdWFuQG1haWwubWFpbCIsInBhc3N3b3JkIjoiKioqKiIsInBob25lIjoiMTIzNCIsImJpcnRoZGF5IjoibWVoIiwiZ2VuZGVyIjoiYW50aS1haXIiLCJyb2xlIjoiYWRtaW4iLCJhdmF0YXIiOm51bGx9LCJpYXQiOjE2ODA3MDkwODIsImV4cCI6MTcxMjI2NjY4Mn0.alTaKaqmuofP1Y3x4tXWjhESJ56UIj-mRn3cWIywXLo",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"name\": \"Gwenny\",\r\n  \"email\": \"gkissell01@oracle.com\",\r\n  \"password\": \"808-44-0971\",\r\n  \"phone\": \"612-332-9046\",\r\n  \"birthday\": \"8/24/2022\",\r\n  \"gender\": \"Non-binary\",\r\n  \"role\": \"Engineer\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{domain}}/user/addUser",
							"host": [
								"{{domain}}"
							],
							"path": [
								"user",
								"addUser"
							]
						}
					},
					"response": []
				},
				{
					"name": "deleteUser (user_id)",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOjMsIm5hbWUiOiJuYW1lIiwiZW1haWwiOiJsdWFuQG1haWwubWFpbCIsInBhc3N3b3JkIjoiKioqKiIsInBob25lIjoiMTIzNCIsImJpcnRoZGF5IjoibWVoIiwiZ2VuZGVyIjoiYW50aS1haXIiLCJyb2xlIjoiYWRtaW4iLCJhdmF0YXIiOm51bGx9LCJpYXQiOjE2ODA3MDkwODIsImV4cCI6MTcxMjI2NjY4Mn0.alTaKaqmuofP1Y3x4tXWjhESJ56UIj-mRn3cWIywXLo",
									"type": "string"
								}
							]
						},
						"method": "DELETE",
						"header": [],
						"url": {
							"raw": "{{domain}}/user/deleteUser/:user_id",
							"host": [
								"{{domain}}"
							],
							"path": [
								"user",
								"deleteUser",
								":user_id"
							],
							"variable": [
								{
									"key": "user_id",
									"value": "3"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "userSearchPagination",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOjMsIm5hbWUiOiJuYW1lIiwiZW1haWwiOiJsdWFuQG1haWwubWFpbCIsInBhc3N3b3JkIjoiKioqKiIsInBob25lIjoiMTIzNCIsImJpcnRoZGF5IjoibWVoIiwiZ2VuZGVyIjoiYW50aS1haXIiLCJyb2xlIjoiYWRtaW4iLCJhdmF0YXIiOm51bGx9LCJpYXQiOjE2ODA3MDkwODIsImV4cCI6MTcxMjI2NjY4Mn0.alTaKaqmuofP1Y3x4tXWjhESJ56UIj-mRn3cWIywXLo",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"pageIndex\": 3,\r\n    \"pageSize\": 3,\r\n    \"keyword\": \"\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{domain}}/user/getSearchPagination",
							"host": [
								"{{domain}}"
							],
							"path": [
								"user",
								"getSearchPagination"
							]
						}
					},
					"response": []
				},
				{
					"name": "getUserById (user_id)",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOjMsIm5hbWUiOiJuYW1lIiwiZW1haWwiOiJsdWFuQG1haWwubWFpbCIsInBhc3N3b3JkIjoiKioqKiIsInBob25lIjoiMTIzNCIsImJpcnRoZGF5IjoibWVoIiwiZ2VuZGVyIjoiYW50aS1haXIiLCJyb2xlIjoiYWRtaW4iLCJhdmF0YXIiOm51bGx9LCJpYXQiOjE2ODA3MDkwODIsImV4cCI6MTcxMjI2NjY4Mn0.alTaKaqmuofP1Y3x4tXWjhESJ56UIj-mRn3cWIywXLo",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{domain}}/user/getUserById/:user_id",
							"host": [
								"{{domain}}"
							],
							"path": [
								"user",
								"getUserById",
								":user_id"
							],
							"variable": [
								{
									"key": "user_id",
									"value": "3"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "updateUser (user_id)",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOjMsIm5hbWUiOiJuYW1lIiwiZW1haWwiOiJsdWFuQG1haWwubWFpbCIsInBhc3N3b3JkIjoiKioqKiIsInBob25lIjoiMTIzNCIsImJpcnRoZGF5IjoibWVoIiwiZ2VuZGVyIjoiYW50aS1haXIiLCJyb2xlIjoiYWRtaW4iLCJhdmF0YXIiOm51bGx9LCJpYXQiOjE2ODA3MDkwODIsImV4cCI6MTcxMjI2NjY4Mn0.alTaKaqmuofP1Y3x4tXWjhESJ56UIj-mRn3cWIywXLo",
									"type": "string"
								}
							]
						},
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"name\": \"string\",\r\n    \"email\": \"string234\",\r\n    \"password\": \"string\",\r\n    \"phone\": \"string\",\r\n    \"birthday\": \"string\",\r\n    \"gender\": \"string\",\r\n    \"role\": \"string\",\r\n    \"avatar\":null\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{domain}}/user/updateUser/:user_id",
							"host": [
								"{{domain}}"
							],
							"path": [
								"user",
								"updateUser",
								":user_id"
							],
							"variable": [
								{
									"key": "user_id",
									"value": "30"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "searchUser (user_name)",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOjMsIm5hbWUiOiJuYW1lIiwiZW1haWwiOiJsdWFuQG1haWwubWFpbCIsInBhc3N3b3JkIjoiKioqKiIsInBob25lIjoiMTIzNCIsImJpcnRoZGF5IjoibWVoIiwiZ2VuZGVyIjoiYW50aS1haXIiLCJyb2xlIjoiYWRtaW4iLCJhdmF0YXIiOm51bGx9LCJpYXQiOjE2ODA3MDkwODIsImV4cCI6MTcxMjI2NjY4Mn0.alTaKaqmuofP1Y3x4tXWjhESJ56UIj-mRn3cWIywXLo",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"name\": \"string\",\r\n    \"email\": \"string\",\r\n    \"password\": \"string\",\r\n    \"phone\": \"string\",\r\n    \"birthday\": \"string\",\r\n    \"gender\": \"string\",\r\n    \"role\": \"string\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{domain}}/user/searchUser/:user_name",
							"host": [
								"{{domain}}"
							],
							"path": [
								"user",
								"searchUser",
								":user_name"
							],
							"variable": [
								{
									"key": "user_name",
									"value": "bao"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "uploadAvatar (user_id)",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOjMsIm5hbWUiOiJuYW1lIiwiZW1haWwiOiJsdWFuQG1haWwubWFpbCIsInBhc3N3b3JkIjoiKioqKiIsInBob25lIjoiMTIzNCIsImJpcnRoZGF5IjoibWVoIiwiZ2VuZGVyIjoiYW50aS1haXIiLCJyb2xlIjoiYWRtaW4iLCJhdmF0YXIiOm51bGx9LCJpYXQiOjE2ODA3MDkwODIsImV4cCI6MTcxMjI2NjY4Mn0.alTaKaqmuofP1Y3x4tXWjhESJ56UIj-mRn3cWIywXLo",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "formdata",
							"formdata": [
								{
									"key": "fileUpload",
									"type": "file",
									"src": "/C:/Users/luong/Desktop/20230215223121_1.jpg"
								}
							]
						},
						"url": {
							"raw": "{{domain}}/user/uploadAvatar/:user_id",
							"host": [
								"{{domain}}"
							],
							"path": [
								"user",
								"uploadAvatar",
								":user_id"
							],
							"variable": [
								{
									"key": "user_id",
									"value": "2"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "getRoom",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOjMsIm5hbWUiOiJuYW1lIiwiZW1haWwiOiJsdWFuQG1haWwubWFpbCIsInBhc3N3b3JkIjoiKioqKiIsInBob25lIjoiMTIzNCIsImJpcnRoZGF5IjoibWVoIiwiZ2VuZGVyIjoiYW50aS1haXIiLCJyb2xlIjoiYWRtaW4iLCJhdmF0YXIiOm51bGx9LCJpYXQiOjE2ODA3MDkwODIsImV4cCI6MTcxMjI2NjY4Mn0.alTaKaqmuofP1Y3x4tXWjhESJ56UIj-mRn3cWIywXLo",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{domain}}/room/getRoom",
							"host": [
								"{{domain}}"
							],
							"path": [
								"room",
								"getRoom"
							]
						}
					},
					"response": []
				},
				{
					"name": "addRoom",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOjMsIm5hbWUiOiJuYW1lIiwiZW1haWwiOiJsdWFuQG1haWwubWFpbCIsInBhc3N3b3JkIjoiKioqKiIsInBob25lIjoiMTIzNCIsImJpcnRoZGF5IjoibWVoIiwiZ2VuZGVyIjoiYW50aS1haXIiLCJyb2xlIjoiYWRtaW4iLCJhdmF0YXIiOm51bGx9LCJpYXQiOjE2ODA3MDkwODIsImV4cCI6MTcxMjI2NjY4Mn0.alTaKaqmuofP1Y3x4tXWjhESJ56UIj-mRn3cWIywXLo",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"location_id\": 1,\r\n    \"room_name\": \"string\",\r\n    \"guests\": 1,\r\n    \"bedrooms\": 1,\r\n    \"beds\": 1,\r\n    \"bathrooms\": 1,\r\n    \"description\": \"string\",\r\n    \"price\": 1,\r\n    \"washer\": 1,\r\n    \"iron\": 1,\r\n    \"television\": 1,\r\n    \"air_con\": 1,\r\n    \"wifi\": 1,\r\n    \"kitchen\": 1,\r\n    \"parking_lot\": 1,\r\n    \"pool\": 1,\r\n    \"image\": \"string\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{domain}}/room/addRoom",
							"host": [
								"{{domain}}"
							],
							"path": [
								"room",
								"addRoom"
							]
						}
					},
					"response": []
				},
				{
					"name": "getRoomByLocationId (location_id)",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOjMsIm5hbWUiOiJuYW1lIiwiZW1haWwiOiJsdWFuQG1haWwubWFpbCIsInBhc3N3b3JkIjoiKioqKiIsInBob25lIjoiMTIzNCIsImJpcnRoZGF5IjoibWVoIiwiZ2VuZGVyIjoiYW50aS1haXIiLCJyb2xlIjoiYWRtaW4iLCJhdmF0YXIiOm51bGx9LCJpYXQiOjE2ODA3MDkwODIsImV4cCI6MTcxMjI2NjY4Mn0.alTaKaqmuofP1Y3x4tXWjhESJ56UIj-mRn3cWIywXLo",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{domain}}/room/getRoomByLocationId/:location_id",
							"host": [
								"{{domain}}"
							],
							"path": [
								"room",
								"getRoomByLocationId",
								":location_id"
							],
							"variable": [
								{
									"key": "location_id",
									"value": "1"
								}
							]
						}
					},
					"response": []
				}
			]
		}
	],
	"event": [
		{
			"listen": "prerequest",
			"script": {
				"type": "text/javascript",
				"exec": [
					""
				]
			}
		},
		{
			"listen": "test",
			"script": {
				"type": "text/javascript",
				"exec": [
					""
				]
			}
		}
	],
	"variable": [
		{
			"key": "domain",
			"value": "localhost:8080/api",
			"type": "string"
		}
	]
}