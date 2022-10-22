import React, {
  useCallback,
  useState,
  useRef,
} from 'react';
import {
  FileError,
  FileRejection,
  FileWithPath,
  useDropzone,
} from 'react-dropzone';
import anime, { AnimeAnimParams, AnimeTimelineInstance } from 'animejs';
import clsx from 'clsx';

export type IFile = FileWithPath | null;

interface Props {
  handleDrop: (file: FileWithPath) => void;
  file: IFile;
}

function addActionsToTimeline<T extends AnimeTimelineInstance>(
  timeline: T,
  actions: Array<AnimeAnimParams>,
): T;
function addActionsToTimeline<T extends AnimeTimelineInstance>(
  timeline: T,
  actions: Array<AnimeAnimParams>,
  loop: number,
  lastAction?: AnimeAnimParams,
): T;
function addActionsToTimeline(
  timeline: AnimeTimelineInstance,
  actions: Array<AnimeAnimParams>,
  loop?: number,
  lastAction?: AnimeAnimParams,
) {
  const addActions = () => {
    actions.forEach((action) => {
      timeline.add(action);
    });
  };

  const addActionsInLoop = (n: number) => {
    for (let i = 1; i <= n; i += 1) {
      addActions();
    }
  };

  if (loop) {
    addActionsInLoop(loop);
  } else {
    addActions();
  }
  if (lastAction) timeline.add(lastAction);
}

export default function Dropzone({ handleDrop, file }: Props) {
  const [error, setError] = useState<FileError | null>(null);

  const animationElementRef = useRef(null);

  const onErrorAnimation = () => {
    const target = animationElementRef.current;
    const timeline = anime.timeline({
      easing: 'easeInElastic',
      targets: target,
    });

    addActionsToTimeline(
      timeline,
      [
        { rotateZ: '3deg', duration: 10 },
        { rotateZ: '-3deg', duration: 10 },
      ],
      10,
      { rotateZ: 0, duration: 20 },
    );
  };

  const onDrop = useCallback(
    (files: Array<FileWithPath>, errors: Array<FileRejection>) => {
      // Array with single File
      if (errors.length > 0) {
        const errorObj = errors[0].errors[0];
        setError(errorObj);
        onErrorAnimation();
      } else {
        handleDrop(files[0]);
      }
    },
    [],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    maxFiles: 1,
    onDrop,
  });

  return (
    <section
      className={clsx(
        'container',
        'w-5/6',
        'bg-white',
        'outline-dashed',
        error ? 'outline-4' : 'outline-2',
        error ? 'outline-red-500' : 'outline-gray-400',
      )}
      ref={animationElementRef}
    >
      <div {...getRootProps({ className: 'dropzone py-16 cursor-pointer' })}>
        <input {...getInputProps()} />
        <div className="h-12">
          <p
            className={clsx(
              'px-3',
              'word-wrap',
              file ? 'text-black/100' : 'text-black-40',
              file ? 'font-bold' : 'font-normal',
              isDragActive ? 'text-black/30 text-sm' : null,
            )}
          >
            {file ? file.path : 'Drop file here, or click to select'}
          </p>
          <p className="text-xl font-bold text-red-600">
            {error ? error.message : ''}
          </p>
        </div>
      </div>
    </section>
  );
}
