import { standalone_routes } from '@/components/shared';
import { useDevice } from '@deriv-com/ui';
import './app-logo.scss';

export const AppLogo = () => {
    const { isDesktop } = useDevice();

    if (!isDesktop) return null;
    return (
        <a
            href='https://www.paulfx.site/'
            target='_blank'
            rel='noopener noreferrer'
            className='app-header__logo paulfx-logo'
        >
            <span className='paulfx-text'>PAUL FX</span>
        </a>
    );
};
