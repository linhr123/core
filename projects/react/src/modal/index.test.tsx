import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CdsModal, CdsModalActions, CdsModalContent, CdsModalHeader } from './index';

describe('CdsModal', () => {
  it('renders', async () => {
    render(
      <CdsModal>
        <CdsModalHeader>
          <h3 cds-text="title">My Modal</h3>
        </CdsModalHeader>
        <CdsModalContent>
          <div cds-layout="vertical gap:md p-y:xs">
            <p cds-text="body">Lorem Ipsum</p>
          </div>
        </CdsModalContent>
        <CdsModalActions>
          <div cds-layout="horizontal gap:sm align:right">Foo</div>
        </CdsModalActions>
      </CdsModal>
    );

    expect(await screen.findByText('My Modal')).toBeInTheDocument();
    expect(document.querySelector('cds-modal-content')).toHaveTextContent(/Lorem Ipsum/);
    expect(document.querySelector('cds-modal-actions')).toHaveTextContent(/Foo/);

    expect(document.querySelector('cds-modal')).not.toHaveAttribute('hidden');
  });

  it('has attribute hidden when hidden', () => {
    render(
      <CdsModal hidden>
        <CdsModalHeader>
          <h3 cds-text="title">My Modal</h3>
        </CdsModalHeader>
      </CdsModal>
    );

    expect(document.querySelector('cds-modal')).toHaveAttribute('hidden', 'true');
  });

  it('snapshot', () => {
    const { container } = render(
      <CdsModal>
        <CdsModalHeader>
          <h3 cds-text="title">My Modal</h3>
        </CdsModalHeader>
        <CdsModalContent>
          <div cds-layout="vertical gap:md p-y:xs">
            <p cds-text="body">Lorem Ipsum</p>
          </div>
        </CdsModalContent>
        <CdsModalActions>
          <div cds-layout="horizontal gap:sm align:right">Foo</div>
        </CdsModalActions>
      </CdsModal>
    );
    expect(container).toMatchSnapshot();
  });
});
