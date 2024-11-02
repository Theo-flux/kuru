import { delFromStore } from '@/utils/store';
import { useState } from 'react';

interface IListViewProps {
  urls: TKukuruUrls;
  setUrls: React.Dispatch<React.SetStateAction<TKukuruUrls>>;
}
const ListView = ({ urls, setUrls }: IListViewProps) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [confirmDeleteIndex, setConfirmDeleteIndex] = useState<number | null>(null);

  const handleDelete = (key: string) => {
    const updatedUrls = delFromStore(key);
    setUrls(updatedUrls);
    setConfirmDeleteIndex(null);
  };

  return (
    <div className="min-w-[320px] w-full">
      <div className="md:hidden space-y-4 w-full">
        {urls.map((url, id) => {
          const link = `${window.location.origin}/link/${url.value}`;
          return (
            <div key={id} className="p-4 border rounded-lg shadow-sm flex flex-col space-y-2 w-full">
              <div className="flex items-center">
                <span className="font-bold mr-2">S/N:</span>
                <span>{id + 1}</span>
              </div>
              <div className="flex items-center">
                <span className="font-bold mr-2">Long URL:</span>
                <span className="text-ellipsis truncate w-[200px]">{url.key}</span>
              </div>
              <div className="flex items-center">
                <span className="font-bold mr-2">Short URL:</span>
                <div className="flex items-center space-x-2 w-[200px]">
                  <span className="text-ellipsis truncate w-[150px]">{link}</span>
                  <button
                    className="btn btn-primary btn-xs"
                    onClick={() => {
                      navigator.clipboard
                        .writeText(link)
                        .then(() => {
                          setCopiedIndex(id);
                          setTimeout(() => setCopiedIndex(null), 2000);
                        })
                        .catch((err) => {
                          console.error('Failed to copy the link:', err);
                        });
                    }}
                  >
                    {copiedIndex === id ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>
              <div className="flex items-center">
                <span className="font-bold mr-2">Action:</span>
                {confirmDeleteIndex === id ? (
                  <div className="flex space-x-2">
                    <button className="btn btn-error btn-xs" onClick={() => handleDelete(url.key)}>
                      Yes
                    </button>
                    <button className="btn btn-secondary btn-xs" onClick={() => setConfirmDeleteIndex(null)}>
                      No
                    </button>
                  </div>
                ) : (
                  <button className="btn btn-error btn-xs" onClick={() => setConfirmDeleteIndex(id)}>
                    Delete
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <table className="hidden md:table w-full">
        <thead>
          <tr>
            <th>s/n</th>
            <th>Long url</th>
            <th>Short url</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {urls.map((url, id) => {
            const link = `${window.location.origin}/link/${url.value}`;
            return (
              <tr key={id}>
                <th>{id + 1}</th>
                <td>
                  <div className="font-bold text-ellipsis truncate w-[200px]">{url.key}</div>
                </td>
                <td>
                  <div className="flex justify-start items-start space-x-1 w-[200px]">
                    <p className="font-bold text-ellipsis truncate w-[150px]">{link}</p>
                    <button
                      className="btn btn-primary btn-xs"
                      onClick={() => {
                        navigator.clipboard
                          .writeText(link)
                          .then(() => {
                            setCopiedIndex(id);
                            setTimeout(() => setCopiedIndex(null), 2000);
                          })
                          .catch((err) => {
                            console.error('Failed to copy the link:', err);
                          });
                      }}
                    >
                      {copiedIndex === id ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </td>
                <th>
                  {confirmDeleteIndex === id ? (
                    <div className="flex justify-start space-x-1">
                      <button className="btn btn-error btn-xs" onClick={() => handleDelete(url.key)}>
                        Yes
                      </button>
                      <button
                        className="btn btn-secondary btn-xs"
                        onClick={() => setConfirmDeleteIndex(null)} // Cancel deletion
                      >
                        No
                      </button>
                    </div>
                  ) : (
                    <button
                      className="btn btn-error btn-xs"
                      onClick={() => setConfirmDeleteIndex(id)} // Ask for confirmation
                    >
                      Delete
                    </button>
                  )}
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListView;
