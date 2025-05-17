"use client"
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';

type Props = {
    onFileSelect: (file: File) => void;
};

function ImageUploadWithPreview({ onFileSelect }: Props) {
    const [file, setFile] = useState<File>() ;
    const [preview, setPreview] = useState<string | null>(null);

    const handleChange = (e: any) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            onFileSelect(selectedFile);
            setPreview(URL.createObjectURL(selectedFile));
        }
    };

    // const handleUpload = async () => {
    //     if (!file) return;

    //     const formData = new FormData();
    //     formData.append('image', file);

    //     try {
    //         const res = await fetch('http://localhost:8080/upload', {
    //             method: 'POST',
    //             body: formData,
    //         });

    //         const data = await res.json();
    //         console.log('Uploaded:', data);
    //     } catch (err) {
    //         console.error('Upload failed:', err);
    //     }
    // };

    return (
        <div className='w-full h-full flex flex-col items-center gap-4'>
            <div className='w-full h-fit min-h-6/12 overflow-hidden bg-accent rounded-2xl flex justify-center items-center border shadow-md shadow-secondary p-2'>
                {preview && <img src={preview} alt="preview" className='w-auto h-fit object-contain rounded-2xl' />}
            </div>
            <div className='sticky w-full h-50 flex justify-center items-center '>
                <Input type="file" accept="image/*" onChange={handleChange} className='w-fit fixed  bg-primary/70' />
            </div>
        </div>
    );
}

export default ImageUploadWithPreview;
