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
    <table className="table w-full">
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
                <div className="font-bold text-ellipsis truncate w-[150px]">{url.key}</div>
              </td>
              <td>
                <div className="flex justify-start items-start space-x-1 w-[150px]">
                  <p className="font-bold text-ellipsis truncate w-[120px]">{link}</p>
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
  );
};

export default ListView;
