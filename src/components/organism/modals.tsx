/* eslint-disable prettier/prettier */
/* eslint-disable no-empty-pattern */
/* eslint-disable prettier/prettier */
import * as React from 'react';

export type ModalProps = { visible?: boolean; content?: React.ReactNode };

export const Modal = <PROPS extends ModalProps>({
  visible,
  content,
}: PROPS): JSX.Element => {
  return (
    <div>
      {visible && (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity " />

          <div className="fixed inset-0 z-10 overflow-y-auto ">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              {content}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
