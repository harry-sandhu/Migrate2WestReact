import { useEffect, useState } from "react";
import { adminFetch } from "../../api/client";

export default function AdminServiceData() {
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await adminFetch("/api/services");
    const d = await res.json();
    setData(d || {});
    setLoading(false);
  };

  /* 🔥 LABEL FORMAT */
  const format = (text: string) =>
    text
      .replace(/-/g, " ")
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (s) => s.toUpperCase());

  /* 🔥 UPDATE */
  const update = (path: string[], value: any) => {
    const copy = structuredClone(data);
    let curr = copy;

    path.slice(0, -1).forEach((p) => {
      if (!curr[p]) curr[p] = {};
      curr = curr[p];
    });

    curr[path[path.length - 1]] = value;
    setData(copy);
  };

  /* 🔥 FIELD */
  const Field = ({ label, value, onChange }: any) => (
    <div className="bg-white border rounded-xl p-3 shadow-sm hover:shadow-md transition">
      <label className="text-xs text-gray-500">{label}</label>
      <input
        type="number"
        value={value ?? 0}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full mt-1 border rounded px-2 py-2 font-semibold"
      />
    </div>
  );

  /* 🔥 ARRAY HANDLER (IMPORTANT FIX) */
  const renderArray = (arr: any[], path: string[]) => {
    return (
      <div className="space-y-3">
        {arr.map((item, i) => (
          <div
            key={i}
            className="border rounded-xl p-4 bg-white shadow-sm space-y-3"
          >
            {Object.entries(item).map(([k, v]: any) => {
              const newPath = [...path, i.toString(), k];

              if (typeof v === "number") {
                return (
                  <Field
                    key={k}
                    label={format(k)}
                    value={v}
                    onChange={(val: any) => {
                      const newArr = [...arr];
                      newArr[i][k] = val;
                      update(path, newArr);
                    }}
                  />
                );
              }

              if (typeof v === "string") {
                return (
                  <div key={k}>
                    <label className="text-xs text-gray-500">
                      {format(k)}
                    </label>
                    <input
                      value={v}
                      onChange={(e) => {
                        const newArr = [...arr];
                        newArr[i][k] = e.target.value;
                        update(path, newArr);
                      }}
                      className="w-full border rounded px-2 py-2"
                    />
                  </div>
                );
              }

              return null;
            })}
          </div>
        ))}
      </div>
    );
  };

  /* 🔥 UNIVERSAL RENDER */
  const renderAny = (obj: any, path: string[] = []) => {
    return Object.entries(obj).map(([key, val]: any) => {
      const newPath = [...path, key];

      /* ✅ NUMBER */
      if (typeof val === "number") {
        return (
          <Field
            key={newPath.join(".")}
            label={format(key)}
            value={val}
            onChange={(v: number) => update(newPath, v)}
          />
        );
      }

      /* ✅ serviceFee */
      if (val?.serviceFee !== undefined) {
        return (
          <Field
            key={newPath.join(".")}
            label={format(key)}
            value={val.serviceFee}
            onChange={(v: number) =>
              update([...newPath, "serviceFee"], v)
            }
          />
        );
      }

      /* ✅ ARRAY (FIXED ISSUE) */
      if (Array.isArray(val)) {
        return (
          <div
            key={newPath.join(".")}
            className="bg-gray-50 p-4 rounded-xl space-y-3"
          >
            <h3 className="font-semibold text-purple-600">
              {format(key)}
            </h3>
            {renderArray(val, newPath)}
          </div>
        );
      }

      /* ✅ OBJECT */
      if (typeof val === "object" && val !== null) {
        return (
          <div
            key={newPath.join(".")}
            className="bg-gray-50 p-4 rounded-xl space-y-3 border"
          >
            <h3 className="font-semibold text-blue-600">
              {format(key)}
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {renderAny(val, newPath)}
            </div>
          </div>
        );
      }

      return null;
    });
  };

  if (loading) {
    return (
      <div className="p-10 text-center text-gray-500">
        Loading service data...
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold">Service Pricing</h1>
        <p className="text-gray-500">
          Edit all services dynamically
        </p>
      </div>

      {/* CONTENT */}
      <div className="space-y-6">
        {Object.entries(data).map(([key, val]: any) => (
          <div
            key={key}
            className="bg-white p-6 rounded-2xl shadow space-y-4"
          >
            <h2 className="text-xl font-semibold text-blue-600 border-b pb-2">
              {format(key)}
            </h2>

            <div className="grid gap-4">
              {renderAny(val, [key])}
            </div>
          </div>
        ))}
      </div>

      {/* SAVE */}
      <div className="flex justify-end">
        <button 
          onClick={async () => {
            await adminFetch("/api/services", {
              method: "PUT",
              body: JSON.stringify(data),
            });
            alert("Saved ✅");
          }}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}