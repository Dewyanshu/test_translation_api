import { useState } from "react";
function App() {
    const [fileImage, setFile] = useState(null)

    const setFileData = (e) => {
        console.log(e)
        if (e?.target?.files && e.target.files.length > 0) {
            setFile(e.target.value)
        }
    }
    return (
        <>
            <input
                type="file"
                onChange={(e) => setFileData(e)}
                multiple={false}
            />
            {fileImage && <img src={fileImage} alt="merger" height='400px' width='400px' />}
        </>
    )
}

export default App;



// // import { useState } from "react";
// // import mergeImages from 'merge-images';
// // import Resizer from "react-image-file-resizer";

// // // RAW IMAGES
// // import canvas_1 from './canvas-1.jpg';
// // // import canvas_2 from './canvas-2.jpg';
// // import canvas_3 from './canvas-3.jpg';
// // import img from './img.jpg';


// // function App() {
// //     // const [state, setState] = useState("home");
// //     // const setimage = () => {
// //     //     // console.log("inside")
// //     //     mergeImages([canvas_1, { src: img, opacity: 0.01, x: 40, y: 0 }])
// //     //         .then((b64) => {
// //     //             setState(b64);
// //     //         })
// //     //         .catch((error) => {
// //     //             console.error('Error merging images:', error);
// //     //         });
// //     // }

// //     // const handleShowCanvas = (event) => {
// //     //     // console.log(event.target.name);
// //     //     if (event.target.name === 'canvas_1') {

// //     //     } else if (event.target.name === 'canvas_3') {

// //     //     }
// //     // }
// //     // return (
// //     //     <>
// //     //         <h1>Canvas Available</h1>
// //     //         <img src={canvas_1} alt="canvas" name="canvas_1" height='200px' width='200px' onClick={handleShowCanvas} />
// //     //         <img src={canvas_3} alt="canvas" name="canvas_3" height='200px' width='200px' onClick={handleShowCanvas} />
// //     //         <br /><br /><br /><br />
// //     //         <h1>Upload Image</h1>


// //     //         {state && <img src={state} alt="merger" height='200px' width='200px' />}
// //     //         <br /><br />
// //     //         <button onClick={setimage}>Image Merger</button>
// //     //     </>
// //     // )
// //     return (
// //         <>

// //         </>
// //     )
// // }
// // export default App;


























// // import { useState } from "react";
// // import { ReactPhotoEditor } from 'react-photo-editor'
// // import 'react-photo-editor/dist/style.css'

// // function App() {
// //     const [file, setFile] = useState(undefined)
// //     const [showModal, setShowModal] = useState(false)

// //     // Show modal if file is selected
// //     const showModalHandler = () => {
// //         if (file) {
// //             setShowModal(true)
// //         }
// //     }

// //     // Hide modal
// //     const hideModal = () => {
// //         setShowModal(false)
// //     }

// //     // Save edited image
// //     const handleSaveImage = (editedFile) => {
// //         setFile(editedFile);
// //     };

// //     const setFileData = (e) => {
// //         if (e?.target?.files && e.target.files.length > 0) {
// //             setFile(e.target.files[0])
// //         }
// //     }

// //     return (
// //         <>
// //             <input
// //                 type="file"
// //                 onChange={(e) => setFileData(e)}
// //                 multiple={false}
// //             />

// //             <button onClick={showModalHandler}>Edit</button>

// //             <ReactPhotoEditor
// //                 open={showModal}
// //                 onClose={hideModal}
// //                 file={file}
// //                 onSaveImage={handleSaveImage}
// //             />

// //         </>
// //     )
// // }

// // export default App




// import React, { Component } from "react";
// import Resizer from "react-image-file-resizer";
// import mergeImages from 'merge-images';
// import Cropper from 'react-easy-crop';

// // RAW IMAGES
// import canvas_1 from './canvas-1.jpg';
// // import canvas_2 from './canvas-2.jpg';
// import canvas_3 from './canvas-3.jpg';

// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.fileChangedHandler = this.fileChangedHandler.bind(this);
//         this.state = {
//             newImage: "",
//             uploadImage: "",
//             crop: { x: 0, y: 0 },
//             zoom: 1
//         };
//     }
//     onCropComplete = (croppedArea, croppedAreaPixels) => {
//         console.log(croppedArea, croppedAreaPixels);
//     }

//     handleZoomChange = (e) => {
//         // this.setState({ zoom: parseFloat(e.target.value) });
//     }

//     handleCropChange = (crop) => {
//         // this.setState({ crop });
//     }
//     fileChangedHandler(event) {
//         var fileInput = false;
//         if (event.target.files[0]) {
//             fileInput = true;
//         }
//         if (fileInput) {
//             try {
//                 Resizer.imageFileResizer(
//                     event.target.files[0],
//                     620,
//                     550,
//                     "JPEG",
//                     100,
//                     0,
//                     (uri) => {
//                         this.setState({ uploadImage: uri });
//                     },
//                     "base64",
//                     620,
//                     550
//                 );
//             } catch (err) {
//                 console.log(err);
//             }
//         }
//     }
//     setimage = () => {
//         // console.log("inside")
//         mergeImages([canvas_1, { src: this.state.uploadImage, x: 265, y: 260 }])
//             .then((b64) => {
//                 this.setState({ newImage: b64 });
//             })
//             .catch((error) => {
//                 console.error('Error merging images:', error);
//             });
//     }
//     handleShowCanvas = (event) => {
//         if (event.target.name === 'canvas_1') {

//         } else if (event.target.name === 'canvas_3') {

//         }
//     }
//     render() {
//         const { crop, zoom, uploadImage, newImage } = this.state;
//         return (
//             <div className="App">
//                 {
//                     uploadImage && 
//                     <div>
//                         <div className="crop-container">
//                             <Cropper
//                                 image={uploadImage}
//                                 crop={crop}
//                                 zoom={zoom}
//                                 aspect={9 / 16}
//                                 onCropChange={this.handleCropChange}
//                                 onCropComplete={this.onCropComplete}
//                                 onZoomChange={this.handleZoomChange}
//                             />
//                         </div>
//                         {/* <div className="controls">
//                             <input
//                                 type="range"
//                                 value={zoom}
//                                 min={1}
//                                 max={3}
//                                 step={0.1}
//                                 aria-labelledby="Zoom"
//                                 onChange={this.handleZoomChange}
//                                 className="zoom-range"
//                             />
//                         </div> */}
//                     </div>
//                 }

//                 <h1>Canvas Available</h1>
//                 <img src={canvas_1} alt="canvas" name="canvas_1" height='200px' width='200px' onClick={this.handleShowCanvas} />
//                 <img src={canvas_3} alt="canvas" name="canvas_3" height='200px' width='200px' onClick={this.handleShowCanvas} />
//                 <input type="file" onChange={this.fileChangedHandler} />
//                 {uploadImage && <img src={uploadImage} alt="" height='300px' width='200px' />}
//                 <br /><br /><br /><br /><br />
//                 {newImage && <img src={newImage} alt="merger" height='400px' width='400px' />}
//                 <br /><br />
//                 <button onClick={this.setimage}>Image Merger</button>
//             </div>
//         );
//     }
//     //   const [crop, setCrop] = useState({ x: 0, y: 0 })
//     //   const [zoom, setZoom] = useState(1)
//     //   const onCropComplete = (croppedArea, croppedAreaPixels) => {
//     //     console.log(croppedArea, croppedAreaPixels)
//     //   }
//     //   return (
//     //     <div className="App">
//     //       <div className="crop-container">
//     //         <Cropper
//     //           image="https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000"
//     //           crop={crop}
//     //           zoom={zoom}
//     //           aspect={4 / 3}
//     //           onCropChange={setCrop}
//     //           onCropComplete={onCropComplete}
//     //           onZoomChange={setZoom}
//     //         />
//     //       </div>
//     //       <div className="controls">
//     //         <input
//     //           type="range"
//     //           value={zoom}
//     //           min={1}
//     //           max={3}
//     //           step={0.1}
//     //           aria-labelledby="Zoom"
//     //           onChange={(e) => {
//     //             setZoom(e.target.value)
//     //           }}
//     //           className="zoom-range"
//     //         />
//     //       </div>
//     //     </div>
//     //  )
// }

// export default App;

















// // // import { useState } from "react";
// // // import mergeImages from 'merge-images';
// // // import Resizer from "react-image-file-resizer";

// // // // RAW IMAGES
// // // import canvas_1 from './canvas-1.jpg';
// // // // import canvas_2 from './canvas-2.jpg';
// // // import canvas_3 from './canvas-3.jpg';
// // // import img from './img.jpg';


// // // function App() {
// // //     const [state, setState] = useState("home");
// // //     const setimage = () => {
// // //         console.log("inside")
// // //         mergeImages([canvas_1, { src: img, opacity: 0.01, x: 40, y: 0 }])
// // //             .then((b64) => {
// // //                 setState(b64);
// // //             })
// // //             .catch((error) => {
// // //                 console.error('Error merging images:', error);
// // //             });
// // //     }

// // //     const handleShowCanvas = (event) => {
// // //         console.log(event.target.name);
// // //         if (event.target.name === 'canvas_1') {

// // //         } else if (event.target.name === 'canvas_3') {

// // //         }
// // //     }
// // //     return (
// // //         <>
// // //             <h1>Canvas Available</h1>
// // //             <img src={canvas_1} alt="canvas" name="canvas_1" height='200px' width='200px' onClick={handleShowCanvas} />
// // //             <img src={canvas_3} alt="canvas" name="canvas_3" height='200px' width='200px' onClick={handleShowCanvas} />
// // //             <br /><br /><br /><br />
// // //             <h1>Upload Image</h1>


// // //             {state && <img src={state} alt="merger" height='200px' width='200px' />}
// // //             <br /><br />
// // //             <button onClick={setimage}>Image Merger</button>
// // //         </>
// // //     )
// // // }

// // // export default App;