import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import DropzoneStyles from './DropzoneStyles'
import {Image, Button} from 'semantic-ui-react'

class DropZone extends Component {

    onImageDrop = (files, rejectedFiles) => {
        if (files.length > 0) {
            let file = files[0];
            let reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = () => {

                // Make a fileInfo Object
                let image = {
                    name: file.name,
                    type: file.type,
                    size: file.size,
                    base64: reader.result,
                    preview: file.preview
                };

                this.props.onChange && this.props.onChange(image);

            }
        }
    }

    removeImage = (e, data) => {
        e.stopPropagation();
        this.props.onChange && this.props.onChange(null);
    }

    renderDropContent = () => {
        if (!this.props.image) return (
            <p>Arrastra o haz clic para subir una imágen.</p>
        )

        return (
            <div style={{position: 'relative'}}>
                <Image src={this.props.image.preview} style={{ height: 130, width: 'auto'}} />
                <Button negative circular icon='close' onClick={this.removeImage} style={{position: 'absolute', top: 0, right: 0}}/>
            </div>
        )
    }

    render() {
        return (
            <Dropzone
                multiple={false}
                accept="image/*"
                onDrop={this.onImageDrop}
                style={DropzoneStyles.dropZoneStyle}
                acceptStyle={DropzoneStyles.dropZoneAcceptStyle}
                rejectStyle={DropzoneStyles.dropZoneRejectStyle}
            >
                {this.renderDropContent()}
            </Dropzone>
        )
    }
}

export default DropZone
