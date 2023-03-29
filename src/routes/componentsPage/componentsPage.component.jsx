import React from 'react';
import ShareButton from '../../components/share-button/share-button.components';

import './componentsPage.styles.scss';
//<i class="fa-brands fa-facebook"></i>
const ComponentPage = () => (
    <div className='components-page p-4'>
        <h2 className='text-center font-weight-bold mb-4'>Cool components</h2>
        <div className='py-4'>
            <ShareButton/>
        </div>
        
    </div>
)

export default ComponentPage;